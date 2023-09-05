trigger AccountTrigger on Account (before update,after update) {
 boolean isRecursive=true;
    if(isrecursive){
        if(Trigger.isAfter){
            for(Account acc:Trigger.New){
                List<Contact>contacts=[select id from contact where AccountId=:acc.id];
                for(contact con:contacts){
                    con.Asgn_Office_Country__c=acc.Asgn_Office_Country__c;
                }
                isrecursive=false;
                update contacts;
            }
                }
            }
        }