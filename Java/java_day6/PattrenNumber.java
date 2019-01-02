/*  Print following
       Input the number: 7 
       Expected Output :                                   
             1                                                  
            212                                                 
           32123                                                
          4321234                                               
         543212345                                              
        65432123456                                             
       7654321234567                                            
        65432123456                                             
         543212345                                              
          4321234                                               
           32123                                                
            212                                                 
             1   

*/

import java.util.Scanner;
public class PattrenNumber {

	public static void main(String args[]){
		byte number; //size of the pattern
		boolean up;
		Scanner	in=new Scanner(System.in);
		System.out.println("Enter the size of number pattern :");
		number=in.nextByte();
		up=true;
			for(int i=0,k=1;i<number;i++,k++){  //this is for printing the up side of pattern
				if(up){
					for(int space=0;space<number-k;space++) //this is for spaces
						System.out.print(" ");
					for(int value=k;value>0;value--)        //this is for printing values
						System.out.print(value);
					for(int value=2;value<=k;value++)
						System.out.print(value);
					System.out.println();
				}
				else{
					for(int space=0;space<k;space++) //this is for spaces
						System.out.print(" ");
					for(int value= number-k;value>0;value--)       //this is for printing values
						System.out.print(value);
					for(int value=2;value<=number-k;value++)
						System.out.print(value);
					System.out.println();
					
				}
				if(i==(number-1) && up==true){
					up=false;
					k=0;
					i=0;
				}

			}
			in.close();
		}
	}

