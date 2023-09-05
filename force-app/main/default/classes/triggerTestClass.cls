@IsTest
    public class triggerTestClass {
        @testSetup static void setup(){
            Account acc=new Account();
            acc.Name='test';
            acc.Asgn_Office_Country__c='India';
            insert acc;
            Account acc1=[select id from Account where name='test'];
            Contact con=new Contact();
             con.LastName='test1';
            con.AccountId=acc1.id;
            insert con;
            System.debug(con);
        }
        @isTest
        public static void insertTriggerTest(){
            Contact con1=[select Asgn_Office_Country__c from contact where lastname='test1'];
            System.assertEquals('India',con1.Asgn_Office_Country__c);
        }
        @isTest
        public static void updatetriggerTest(){
            account acc2=[select id from account where name='test'];
            acc2.Asgn_Office_Country__c='USA';
            update acc2;
            Contact con2=[select Asgn_Office_Country__c from contact where lastname='test1'];
            System.assertEquals('USA',con2.Asgn_Office_Country__c);
        }
        }