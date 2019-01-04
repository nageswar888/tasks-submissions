/* Remove duplicates from the given array without using set
 */

package day_7;

import java.util.Scanner;
public class RemovingDuplicates {
	public static void main(String args[]){
		Scanner in = new Scanner(System.in);
		System.out.println("enter the size of an array");
		int size = in.nextInt();
		int a[] = new int[size];
		int b[] = new int[size];
		int count=0;  //index for the non duplicated elements array
		System.out.println("enter the values into array");
		for(int i=0;i<size;i++){
			a[i] = in.nextInt();
		}
		for(int i=0;i<size;i++){
			if(a[i]!='$'){
			for(int j=i+1;j<size;j++){
				if(a[i]==a[j]){
					a[j]='$'; //making the duplicated values $
				}
			}
				b[count++]=a[i]; //saving the non duplicated values into  array
				
		}
		}
		for(int i=0;i<count;i++)
			System.out.println(b[i]);
		in.close();
	}
	
}
