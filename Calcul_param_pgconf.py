import re;

'''ouvre le fichier et le li'''
with open("postgresql.vpa.conf", "r") as fichier:
    #permet de lire une ligne 
    ligne = fichier.readline()
    #initiation des tableau 
    parametres = {}
    doublons = {}

    '''Parcourt une ligne du text'''
    while ligne:
        
        '''ajout du parametre de la ligne dans mon tableau'''
        if ligne.strip() and not ligne.strip().startswith("#"):
            
            #renvoie le paramètre et sa valeur
            donnees = ligne.split('#')[0].strip()  
                    
            #renvoie le parametre seulement
            param  = ligne.split('=')[0].strip() 
                      
            #renvoie la valeur du parametre
            valeur = donnees.split('=')[1]
            
            '''Ajoute le parametre dans le tableau qui correspond'''
            if param in parametres :
                doublons[param]= valeur
            else :
                parametres[param] = valeur
        
        ligne = fichier.readline()
    
    '''Boucle for qui selectionne les paramètres necessaire pour vérifier la saturation de la ram'''
    for param in parametres:
                
        if param == 'max_connections' :
            #Selection de la valeur correspondante au parametre
            max_co = param
            val1 = parametres[param]
            val1 = int(val1) 
            print("{} : {}".format(param, parametres[param]))
            
        elif param == 'work_mem' :
            work_mem = param
            val2 = parametres[param]
            print("{} : {}".format(param, parametres[param]))
            
            #supprime l'unité pour ne prendre en compte que la valeur
            if 'MB' in val2 :
                val2 = re.sub("MB", "", val2)
                val2 = int(val2)
            elif 'kB' in val2 :
                val2 = re.sub("kB","",val2)
                val2 = int(val2)
                val2 = val2/1024
                           
        elif param == 'shared_buffers' :
            shared_buffers = param
            val3 = parametres[param]
            print("{} : {}".format(param, parametres[param]))

            if 'GB' in val3 :
                val3 = re.sub("GB", "", val3)
                val3 = int(val3)
                val3 = val3*1024
            
        
        elif param == 'maintenance_work_mem':
            mwm = param
            val4 = parametres[param]
            print("{} : {}".format(param, parametres[param]))
            
            if 'GB' in val4 :
                val4 = re.sub("GB", "", val4)
                val4 = int(val4)
                val4 = val4*1024
                
        elif param == 'autovacuum_max_workers':

            amw = param
            val5 = parametres[param]
            val5 = int(val5)
            print("{} : {}".format(param, parametres[param]))

    '''calcul des valeur'''
    ram_sat = (val1 * val2 + val3 + val4 * val5) /1024
    print('TT RAM paramètres : ', ram_sat, 'GB')
    
    '''compare les valeurs '''
    def ram_serveur(ram):
        saturation = ram - ram_sat
        if saturation > 0 :
            print('espace restant = ', saturation, 'GB')
        elif saturation < 0 :
            print('saturation de la ram : ', saturation)
            #if valeur positive :
            new_work_mem = (val2 - ram_sat) - 2
            print('la work_mem doit être à :', new_work_mem, 'MB')

#entre la valeur de la RAM en GB
    ram_serveur(3)
    
    #print(parametres)
    print('il y a :', doublons ,' doublons.')      
    print("Ne pas oublier d'adapter log_temp_files la nouvelle valeur de work_mem")
                                                                                                      
                                                                                                            