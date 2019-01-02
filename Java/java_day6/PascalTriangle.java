/* Write a program to print Pascal's triangle
*/

import java.util.Scanner;
public class PascalTriangle {
	
	public static void main(String args[]){
		
		int[][] a;
		byte size;
		Scanner in=new Scanner(System.in);
			System.out.println("Enter the Size of pascals triangle :");
			size=in.nextByte();
			a=new int[size+1][size+1];
		
			for(int i=0;i<=size;i++){
				for(int j=0;j<=i;j++){
					if(j==0 || j==i-1){
						
						a[i][j]=1;
					}
						
					else if(i==1){
						a[i][j]=3;
					}
					else{
						a[i][j]=a[i-1][j-1]+a[i-1][j];
					}
				}
			}
		
			for(int i=0,k=1;i<=size;i++,k++){
				for(byte space=1;space<=size-k+1;space++)
					System.out.print(" ");
				for(int j=0;j<i;j++)
					System.out.print(a[i][j]+" ");
					
				System.out.println();
			}
		in.close();
	}

}





		