/*  Addition of two matrices
	> Read matrix1	-> getMatrix()
	> Read matrix2	-> getMatrix()
	> Add them 		-> findSum()
	> Display sum 	-> displaySum()
*/

import java.util.Scanner; 
public class AdditionOfMatrices {
     Scanner sc =new Scanner(System.in);
	
	 int r1,c1,r2,c2; //these are the variables for rows and columns of matrix 1 and 2
	 int [][]a;
	 int [][]b;
	 int [][]s;
	 void getMatrix1(){	 		  //this is for reading of matrix 1
		System.out.println("Enter the order of first matrix ");
			r1 = sc.nextInt();		//reading of first matrix rows and column
			c1 = sc.nextInt();
			a = new int [r1][c1];
			System.out.println(r1+""+c1);
		 System.out.println("Enter values into first matrix");
		 for(int i=0;i<r1;i++){
				for(int j=0;j<c1;j++)
					a[i][j] = sc.nextInt();
		 }
	}
	void getMatrix2(){			//this is for reading of matrix 2
	 System.out.println("Enter the order of second matrix ");		
		r2 = sc.nextInt();		//reading of second matrix rows and column
		c2 = sc.nextInt();
		
		 b = new int [r2][c2];
	 System.out.println("Enter values into second matrix ");
	 for(int i=0;i<r2;i++){
			for(int j=0;j<c2;j++)
				b[i][j] = sc.nextInt();
	}
}
	 void findSum(){   //this method is used to find the sum of two matrices
		 
		  s = new int [r1][c1];
		for(int i=0;i<r1;i++)
		{
			for(int j=0;j<c1;j++)
				s[i][j] = a[i][j]+b[i][j];
		}
	}
	 void displaySum()            //this method is used to display the resultant matrix 
	{
		for(int i=0;i<r1;i++)
		{
			for(int j=0;j<c1;j++)
				System.out.print(this.s[i][j]+" ");
			System.out.println();
			
		}
	}
	
	
	public static void main(String args[]){
		AdditionOfMatrices am = new AdditionOfMatrices();
		
		am.getMatrix1();
		
		am.getMatrix2();
		
		am.findSum();
		
		am.displaySum();
		
	}

}





 