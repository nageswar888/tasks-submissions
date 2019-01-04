/* Let's say we have an array of elements, Print the required integer by passing parameters in the methods
*/

package day_7;
import java.util.Scanner;
public class PrintingInteger {
	Scanner in = new Scanner(System.in);
	void target_element(int a[],int index,int size) //it returns the value in the array at that index position
	{
		if(index>size){
			System.out.println("index is greater the the size");
			
		}
		else
		System.out.println(a[index]);
	}
	void find_element(int a[],int size) //it finds the index position of the given element
	{
		System.out.println("enter the key :");
		int key = in.nextInt();
		int i;
		for(i=0;i<size;i++)
		{
			if(key==a[i])
				System.out.println("element found at index :"+i);
		}
		if(i==size)
			System.out.println("element is not present in the array");
	}
	public static void main(String args[]){
		PrintingInteger pi = new PrintingInteger();
		
		System.out.println("enter the size of an array :");
		int size = pi.in.nextInt(); //this is for reading the size of array
		int a[] = new int [size];
		
		System.out.println("enter the elements into array :");
		for(int i=0;i<size;i++)
			a[i]= pi.in.nextInt();
		
		System.out.println("enter the index value for finding element in the array :");
		int index = pi.in.nextInt();
		
		pi.target_element(a,index,size);
		
		pi.find_element(a,size);
		pi.in.close();
	}

}
