trigger ContactTrigger on Contact (before insert,after insert,before update,after update) {
        boolean isRecursive=true;
        List<Contact>contacts1=new List<Contact>();
        if(trigger.isBefore && trigger.isInsert){
            for(Contact con:Trigger.New){
                Account acc=[select Asgn_Office_Country__c from account where id=:con.AccountId];
                con.Asgn_Office_Country__c=acc.Asgn_Office_Country__c;
                if(con.MailingCountry=='India'){
                    con.CAP_Business_Unit__c='APAC';
           
                }
                       if(con.MailingCountry=='Germany'){
                    con.CAP_Business_Unit__c='EU';
            }
                       if(con.MailingCountry=='Belgium'){
                    con.CAP_Business_Unit__c='EU';                     
        }    
                       if(con.MailingCountry=='United Kingdom'){
                    con.CAP_Business_Unit__c='UK';
                       }
                       if(con.MailingCountry=='Canada'){
                    con.CAP_Business_Unit__c='NAM';
            }
                       if(con.MailingCountry=='Argentina'){
                    con.CAP_Business_Unit__c='LATAM';
        }
                       if(con.MailingCountry=='Brazil'){
                           con.CAP_Business_Unit__c='LATAM';
                       }
                       if(con.MailingCountry=='Japan'){
                    con.CAP_Business_Unit__c='APAC';
    
            }
                       if(con.MailingCountry=='United States'){
                    con.CAP_Business_Unit__c='NAM';
        }
                contacts1.add(con);
            }
        }
        if(trigger.isBefore && trigger.isUpdate){
            List<Contact>contacts2=new List<Contact>();
            for(contact con:Trigger.New){
                 if(con.MailingCountry=='India'){
                    con.CAP_Business_Unit__c='APAC';
                 }
                 if(con.MailingCountry=='Germany'){
                    con.CAP_Business_Unit__c='EU';
            }
                 if(con.MailingCountry=='Belgium'){
                    con.CAP_Business_Unit__c='EU';  
            }
                if(con.MailingCountry=='United Kingdom'){
                    con.CAP_Business_Unit__c='UK';
            }
                if(con.MailingCountry=='Canada'){
                    con.CAP_Business_Unit__c='NAM';
            }
                if(con.MailingCountry=='Argentina'){
                    con.CAP_Business_Unit__c='LATAM';
                }
                if(con.MailingCountry=='Brazil'){
                           con.CAP_Business_Unit__c='LATAM';
                    
            }
                  if(con.MailingCountry=='Japan'){
                    con.CAP_Business_Unit__c='APAC';
            }
                  if(con.MailingCountry=='United States'){
                    con.CAP_Business_Unit__c='NAM';
            }
        }
        
        }      
                       
                       }