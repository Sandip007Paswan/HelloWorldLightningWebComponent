public with sharing class getAccountlistRec {
        @AuraEnabled
        public static List<Account> getContactList(){
            List<Account> acoRecord = [select Name,Id from Account]; 
            return acoRecord ;
         
    }
}
