
import java.util.Scanner;
public class SumOfMatrices {
	static Scanner sc = new Scanner(System.in);
	static void get_matrix(int a[][],int r,int c){
		for(int i=0;i<r;i++){
			for(int j=0;j<c;j++)
				a[i][j] = sc.nextInt();
		}
	}
	public static void main(String args[]){
	
	System.out.println("enter the order of first matrix");
	int r1=sc.nextInt();
	int c1=sc.nextInt();
	System.out.println("enter the order of second matrix");
	int r2=sc.nextInt();
	int c2=sc.nextInt();
	
	if((r1==r2)&&(c1==c2)){
		System.out.println("enter the values into first matrix");
		int [][]a= new int[r1][c1];
		get_matrix(a,r1,c1);
		
		System.out.println("enter the values into second matrix");
		int [][]b= new int[r2][c2];
		get_matrix(b,r2,c2);
		
		int [][]c = new int[r1][c1];
		 System.out.println("the sum is two matrices is");
		 
		for(int i=0;i<r1;i++){
			for(int j=0;j<c1;j++){
				c[i][j] = a[i][j]+b[i][j];
			    System.out.println(c[i][j]);
			}
		}
		
	}
	else 
		 System.out.println("the matrices are not compatible");
	
	}
	

}
