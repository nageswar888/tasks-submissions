package files_exceptionhandling;

import java.io.*;
public class BankUser{
	static void details(Bank b1 )
	{
		System.out.println("account type :"+b1.accName);
		System.out.println("account number :"+b1.accNo);
		System.out.println("account holder's name :"+b1.userName);
		System.out.println("password :"+b1.password);
		System.out.println("account balance :"+b1.balance+"\n");
	}
	public static void main(String args[]) throws Exception{
	//FileInputStream f2=
	ObjectInputStream o1 = new ObjectInputStream(new FileInputStream("/home/sk-18/Desktop/bank1.ser"));
	Bank b1 = (Bank)o1.readObject();
	Bank b2 = (Bank)o1.readObject();
	Bank b3 = (Bank)o1.readObject();
	System.out.println("1st account details :");
	details(b1);
	System.out.println("2nd account details :");
	details(b2);
	System.out.println("3rd account details :");
	details(b3);
	
	b2.userName = "Hareesh";
	System.out.println(b2.userName);
}
}