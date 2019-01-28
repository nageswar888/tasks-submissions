package test;

import java.io.FileOutputStream;
import java.io.ObjectOutputStream;
import java.io.Serializable;
import java.util.*;
class Account
{
	int accountNumber,accountHolderBalance;
	String accountHolderName,accountHolderAddress;
	Account(int accNo,String accName,String accAddress,int balance )
	{
		accountNumber = accNo;
		accountHolderName = accName;
		accountHolderAddress = accAddress;
		accountHolderBalance = balance;
	}
	
}

class SavingsAccount extends Account implements Serializable
{
	SavingsAccount(int accNo, String accName, String accAddress, int balance) 
	{
		super(accNo, accName, accAddress, balance);
	}
	void addBalance(int depositAmount)
	{
		accountHolderBalance = accountHolderBalance+depositAmount;
	}
	void displayBalance()
	{
		System.out.println(accountHolderBalance);
	}
	void withDrawAmount(int amountWithDraw)
	{
		if(amountWithDraw>accountHolderBalance)
		{
			throw new ArithmeticException("Insufficient balance");
		}
		else
		System.out.println("amount withdrawn is "+amountWithDraw );
	}
}
 

public class Bank {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		SavingsAccount[] savingsAccount = new SavingsAccount[4];
		
		ArrayList<Account>  account = new ArrayList<Account>();
		
		savingsAccount[0]= new SavingsAccount(1,"nageswar","hyd",10000);
		savingsAccount[1]= new SavingsAccount(2,"sai","hyd",15000);
		savingsAccount[2]= new SavingsAccount(3,"vamshi","guntur",20000);
		
		account.add(savingsAccount[0]);
		account.add(savingsAccount[1]);
		account.add(savingsAccount[2]);
		
		System.out.println("Enter amount to add balance");
		int addbalance = sc.nextInt();
		savingsAccount[0].addBalance(addbalance);
		System.out.println("Enter amount withDraw");
		int withDraw = sc.nextInt();
		savingsAccount[0].withDrawAmount(withDraw);
		System.out.println("account balance is ");
		savingsAccount[0].displayBalance();
		
		try{
			
		FileOutputStream fout = new FileOutputStream("/home/sk-18/Desktop/files/serialize.ser");
		ObjectOutputStream object = new ObjectOutputStream(fout);
		object.writeObject(savingsAccount[0]);
		object.writeObject(savingsAccount[1]);
		object.writeObject(savingsAccount[2]);
		System.out.println("compleated");
		}
		catch(Exception e)
		{
			System.out.println(e);
		}
		
		
	}

}
