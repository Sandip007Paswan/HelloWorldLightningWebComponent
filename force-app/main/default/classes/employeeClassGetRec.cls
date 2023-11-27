public with sharing class employeeClassGetRec {
    @AuraEnabled(cacheable = true)
    public static List<Employee1__c> employeeGetRec() {
       
            List<Employee1__c> acoRecord = [select First_Name__c,Id from  Employee1__c]; 
            
            return acoRecord ;

    }
}
