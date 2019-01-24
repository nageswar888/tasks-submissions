package exam;

import java.util.Scanner;
public class CeasarCipher {
	
	public static void main(String[] args) {
		System.out.print("enter string");
		Scanner in = new Scanner(System.in);
		String s = in.next();
		int n=5;
		char a[] = s.toCharArray();
		char ch;
		for(int i=0;i<a.length;i++)
		{
			 int k = a[i];
			  ch=(char)(k+n);
			  if((k+n)>122){
				  ch =(char)(k+n-26);
				  System.out.print(ch);
			  }
			
			  else
				  System.out.print(ch);  
		}
		in.close();
	
	}

}
