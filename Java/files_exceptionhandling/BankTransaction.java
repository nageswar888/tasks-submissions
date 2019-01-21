package files_exceptionhandling;

import java.io.*;
class Bank implements Serializable{
	int accNo;
	String accName;
	String userName;
	int password;
	int balance;
	Bank(int accNo,String accName,String userName,int password,int balance){
		this.accNo=accNo;
		this.accName=accName;
		this.userName=userName;
		this.password=password;
		this.balance=balance;
	}
}
public class BankTransaction  {
	
	public static void main(String[] args) throws Exception {
		
		Bank s1= new Bank(001,"savings","Nageswar",1234,1000);
		Bank s2= new Bank(002,"current","Sai",4321,800);
		Bank s3= new Bank(003,"savings","Vamshi",4567,1200);

		FileOutputStream f = new FileOutputStream("/home/sk-18/Desktop/bank1.ser");
		ObjectOutputStream out=new ObjectOutputStream(f); 
		 out.writeObject(s1); 
		 out.writeObject(s2); 
		 out.writeObject(s3); 
		 System.out.println("success");  
	}

}
