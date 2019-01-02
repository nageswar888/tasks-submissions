/* Print following
Input the number: 7 
Expected Output :               
      A                                                  
     ABA                                                 
    ABCBA                                                
   ABCDCBA                                               
  ABCDEDCBA                                              
 ABCDEFEDCBA                                             
ABCDEFGFEDCBA                                            
 ABCDEFEDCBA                                             
  ABCDEDCBA                                              
   ABCDCBA                                               
    ABCBA                                                
     ABA                                                 
      A    
*/

import java.util.Scanner;
public class PattrenAlphabets {		
public static void main(String args[]){
	int number;         //this is for maximum number of pattern
	boolean up;
  Scanner	in=new Scanner(System.in);
	System.out.println("Enter the size of pattern :");
	number=in.nextInt();
	up=true;

	for(int i=65,k=0;i<65+number;i++,k++){
		if(up){

			for(int j=65+number;j>65+k+1;j--) //this loop is for printing spaces
				System.out.print(" ");
			for(int l=65;l<=65+k;l++)		 //this loop is for printing letters
				System.out.print((char)l);
			for(int l=65+k-1;l>=65;l--)
				System.out.print((char)l);
			System.out.println("");
			
		}
		else{
			for(int space=0;space<k;space++)		 //this loop is for printing spaces
				System.out.print(" ");
			for(int l=65;l<65+number-k;l++)			//this loop is for printing letters
				System.out.print((char)l);
			for(int l=65+number-k-2;l>=65;l--)
				System.out.print((char)l);
			System.out.println();
		}
		
		if(i==65+number-1 && up==true){
			up=false;
			i=65;
			k=0;
		}
			
	}
	in.close();
}
}