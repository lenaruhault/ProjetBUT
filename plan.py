import re;

def explication(op):
        if op == "Seq Scan" :
            print ("Scan séquentiel : parcourt chaque ligne de la table.")
        elif op == "Index Scan" :
            print("Index Scan : utilise un index pour trouver les lignes correspondantes.")
        elif op == "Bitmap" :
            print("Bitmap Index Scan : Utilise un index pour créer un bitmap des lignes à lire.")
        elif op == "Nested Loop" :
            print ("Boucle imbriquée : pour chaque ligne de la table externe, parcourt la table interne.")
        elif op == "Hash Join" :
            print ("Hash Join : utilise une table de hachage pour joindre les tables.")
        elif op == "Merge Join" :
            print ("Merge Join : trie les deux tables puis les joint.")
        elif op == "Hash Aggregate" :
            return "Hash aggregate : utilise une table de hachage pour agréger les résultats."
        elif "limit" in nom:
            return "Limit : restreint le nombre de lignes retournées"
        elif "sort" in nom:
            return "Sort : trie les résultats."
        elif "aggregate" in nom:
            return "Agrégation : calcule des sommes, moyennes, etc."
        elif "unique" in nom:
            return "Unique : élimine les doublons"
        elif "gather" in nom:
            return "Gather : rassemble les résultats de processus parallèles."
        elif "gather merge" in nom:
            return "Gather Merge : rassemble et trie les résultats parallèles."
        elif "filter" in nom:
            return "Filtre : filtre la collonne spécifié."
        else:
            return "Opération inconnue ou spécifique"

#ouvre le fichier et le li
with open("Plan1.txt", "r") as fichier:
    
    #permet de lire une ligne 
    #ligne = fichier.readline()
    #print(ligne)
    #initiation des tableau 
    dict_op = {'unique' : "Scan séquentiel : parcourt chaque ligne de la table.", 'seq scan': "", 'index scan', 'bitmap', 'nested loop', 'hash join', 'merge join','hash aggregate', 'limit', 'sort', 'aggregate', 'unique', 'gather merge', 'filter'}

    
    tb_op = ['unique', 'seq scan', 'index scan', 'bitmap', 'nested loop', 'hash join', 'merge join','hash aggregate', 'limit', 'sort', 'aggregate', 'unique', 'gather merge', 'filter']
    nb_ligne = 0
    
    fleche = '->'
    #print(tb_op)
    
    for ligne in fichier :
        nb_ligne = nb_ligne +1
        #print(ligne)
        for op in tb_op :
            op = op.title()
            if fleche in ligne and op in ligne :                
                print(nb_ligne, ' - ', op,' - ',ligne)
                explication(op)

            
