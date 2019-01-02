/*  Write a method to accept a year number, test and display whether the given number is leap year or not
*/

import java.util.Scanner;
public class LeapYear {
	static void leapYear(int year){
		if(year%4==0) 
		{
			if(year%100==0){
				if(year%400==0)
					System.out.println("Given year is a leap year");
				else
					System.out.println("Given year is not a leap year");
			}
			else
				System.out.println("Given year is a leap year");
			
		}
		else
			System.out.println("Given year is not a leap year");
	}
	public static void main(String args[]){
		Scanner in = new Scanner(System.in);
		System.out.println("enter the year ");
		int year = in.nextInt();
		
		leapYear(year);
		
		in.close();
	}

}
