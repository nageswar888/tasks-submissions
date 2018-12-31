
import java.util.Scanner;
public class TransposeOfMatrix {
	static Scanner sc = new Scanner(System.in);
	static void get_matrix(int a[][],int r,int c){
		for(int i=0;i<r;i++){
			for(int j=0;j<c;j++)
				a[i][j] = sc.nextInt();
		}
	}
	public static void main(String args[]){
	
	System.out.println("enter the order of first matrix");
	int r=sc.nextInt();
	int c=sc.nextInt();
	
	
	
		System.out.println("enter the values into first matrix");
		int [][]a= new int[r][c];
		get_matrix(a,r,c);
		
		int b[][]=new int [c][r];
		 for (int i = 0; i< r; i++)
	         for (int j = 0; j < c; j++)              
	            b[j][i] = a[i][j];
	 
	      System.out.println("Transpose of the matrix:");
	 
	      for (int i=0;i<c; i++)
	      {
	         for (int j = 0; j< r; j++)
	               System.out.print(b[i][j]+"\t");
	 
		 }		
	
	}
	
}