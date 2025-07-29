'''ouvre le fichier et le li'''
with open("postgresql.bint.conf", "r") as fichier:
    #permet de lire une ligne 
    ligne = fichier.readline()
    #initiation des tableau 
    parametres = []
    doublons = []

    '''Parcourt une ligne du text'''
    while ligne:
        
        '''ajout du parametre de la ligne dans mon tableau'''
        if ligne.strip() and not ligne.strip().startswith("#"):
            #print(ligne)
            param  = ligne.split('=')[0].strip()
            #print(parametre)
            #print(parametres)
            #print(len(parametres)) 
            
            '''Ajoute le parametre dans le tableau qui correspond'''
            if param in parametres :
                doublons.append(param)
                #print('param ajouté doublons :', param)
            else :
                parametres.append(param)
                #print('param ajouté dans parametres :', param)
                
        ligne = fichier.readline()
    
    print(parametres)
    print(doublons)    
                                                                                                                    