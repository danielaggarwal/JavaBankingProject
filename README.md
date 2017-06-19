# JavaBankingProject
It is an Online Banking Project with features like creating new account,queries, transfers,bank statements,etc.
I used a localserver created by wamp software.
If you have to use this project.
Download this project and open in any java IDE preferred netbeans

then create 2 databases in localhost named "bank" and "complex2"
In bank database add 2 Text coloumns named "username" and "password". These are the initial login details of the software
Then in complex2 database add 2 tables named table1 and trans.
In table1 add columns "username"(text),"gender"(text),"contact"(text),"email"(text),"dob"(text),"address"(text),"age"(text),"choice"(text),"ACNO"(INT AutoIncrement)
In table1 add one sample entry directly in server.
In trans table add columns "acno"(INT),"username"(text),"tdate"(text),"type"(text),"amt"(text)
Bam!!The Project will work perfectly.
