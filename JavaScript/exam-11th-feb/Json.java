package collections;

import java.util.Scanner;
public class Json {	
	public static void main(String[] args) {
	
		Scanner scanner = new Scanner(System.in);
		System.out.println("enter the pattren");
		String pattren = scanner.nextLine();
		char p[] = pattren.toCharArray();
		
		int l = p.length;
		if(p[0]=='{' && p[l-1]=='}')
		{
			if(p[1]==':')
				System.out.println("1"); 
			else
				System.out.println("-1");
			if(p[2]=='[' && p[l-2]==']')
			{
				if(p[3]=='{' && p[l-3]=='}')
				{
					if(p[4]== ':')
						System.out.println("1"); 
					else
						System.out.println("-1"); 
				}
			}
			
		}
		
		else
		{
			System.out.println("-1");
		}
		scanner.close();
	}

}
