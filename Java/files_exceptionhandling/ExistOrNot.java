/* Program to check if a file or directory physically exist or not.*/
package files_exceptionhandling;

import java.io.File;
import java.util.Scanner;
public class ExistOrNot {
	public static void main(String args[])
	{
		
		Scanner sc = new Scanner(System.in);
		System.out.println("enter file path :");
		String s = sc.next();  //used for reading file path
		File f = new File(s);   //finding the file in the disk
		{
			if(!f.exists())   //exists() method is for finding whether the file present or not
				System.out.print("directory or file not found");
			else
				System.out.print("directory or file is found");
		}
		
		sc.close();
	}
		
}

