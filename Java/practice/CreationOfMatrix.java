package oopconcepts;

import java.util.Scanner;
public class CreationOfMatrix {
	
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("enter number of rows");
		int rows = sc.nextInt();
		System.out.println("enter number of columns");
		int columns = sc.nextInt();
		int a[][]= new int [rows][columns];
		int k=0,n;
		int b[]= new int [rows*columns+1];
		for(int i=2;i<1000;i++)
		{
			n=0;
			for(int j=2;j<=i/2;j++)
			{
				if(i%j==0){
					n++;
				}
			}
			if(k>rows*columns)
				break;
			if(n==0){
				b[k++]=i;
			}
			
		}		
		int l=0	;	
		for(int i=0;i<rows;i++)
		{
			for(int j=0;j<columns;j++)
			{
				a[i][j]=b[l];
				l++;
			}
		}
		
		for(int i=0;i<rows;i++)
		{
			for(int j=0;j<columns;j++)
			{
				System.out.print(a[i][j]+" ");
			}
			System.out.println();
		}
		sc.close();
	}

}
