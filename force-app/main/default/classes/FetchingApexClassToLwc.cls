public with sharing class FetchingApexClassToLwc {

    @AuraEnabled(cacheable = true)    // thats mean this method going to call that Aura or lwc 
   public static List<Contact> getRecordContactList(String firstNAME,String lastNAME){
       
        firstNAME= '%'+ firstNAME + '%' ;
        lastNAME = '%' + lastNAME + '%' ;
        List<Contact> getConatctDetail = [Select id,Name,FirstName,LastName,Email FROM Contact where FirstName like : firstNAME OR LastName like :lastNAME] ;
        return getConatctDetail;
    }
}
