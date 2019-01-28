package test;

import java.util.Scanner;
interface Sim
{
	void sendSMS(String message,String mobileNumber);
	void dialACall(String mobileNumber);
	
}
class Airtel implements Sim
{
	public void sendSMS(String message,String mobileNumber)
	{
		System.out.println(message+"send from Airtel "+mobileNumber);
	}
	public 	void dialACall(String mobileNumber)
	{
		System.out.println(" diled call from Airtel "+mobileNumber);
	}
	

}
class Vodaphone implements Sim
{
	public void sendSMS(String message,String mobileNumber)
	{
		System.out.println(message+" send from Vodaphone "+mobileNumber);
	}
	public 	void dialACall(String mobileNumber)
	{
		System.out.println(" diled from Vodaphone "+mobileNumber);
	}
}
class BSNL implements Sim
{
	public void sendSMS(String message,String mobileNumber)
	{
		System.out.println(message+" send from BSNL "+mobileNumber);
	}
	public 	void dialACall(String mobileNumber)
	{
		System.out.println(" diled call from BSNL "+mobileNumber);
	}
}
class Mobile
{
	Scanner sc = new Scanner(System.in);
	void insertSim(String s)
	{
		System.out.println(s+" sim inserted into mobile");
	}
	void sendSms(Sim sim)
	{
		System.out.println("Enter the message");
		String message = sc.nextLine();
		System.out.println("Enter the phone number");
		String mobileNo = sc.nextLine();

		sim.sendSMS(message,mobileNo);
	}
	void dialACall(Sim sim)
	{
		System.out.println("Enter the phone number");
		String mobileNo = sc.nextLine();
		sim.dialACall(mobileNo);	
	}
}
public class MobileUser {

		public static void main(String[] args) {
		
			Scanner sc = new Scanner(System.in);
			System.out.println("which type of sim you want to insert");
			System.out.println("1.Airtel\n2.BSNL\n3.Vodaphone");
			Mobile mobile = new Mobile();
			int choice = sc.nextInt();
			String simChoice;
			switch(choice)
			{
				case 1:
					Sim airtel = new Airtel();
					simChoice = "Airtel";
					mobile.insertSim(simChoice);
					mobile.sendSms(airtel);
					mobile.dialACall(airtel);
					break;
				case 2:
					Sim bsnl = new BSNL();
					simChoice = "BSNL";
					mobile.insertSim(simChoice);
					mobile.sendSms(bsnl);
					mobile.dialACall(bsnl);
					break;
				case 3:
					Sim vodaphone = new Vodaphone();
					simChoice = "Vodaphone";
					mobile.insertSim(simChoice);
					mobile.sendSms(vodaphone);
					mobile.dialACall(vodaphone);
					break;
				default:
					System.out.println("enter only Airtel,BSNL or Vodaphone");
					break;
					
			}
			
		}

}
