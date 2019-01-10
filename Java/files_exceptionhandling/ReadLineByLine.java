/* Consider a file contains a paragraph of data. Write a program to read the file line by line
*/
package files_exceptionhandling;

import java.io.BufferedReader;
import java.io.FileReader;
import java.util.Scanner;
import java.io.IOException;
public class ReadLineByLine {
	public static void main(String args[])
	{
		Scanner sc = new Scanner(System.in);
		System.out.println("enter the file path :");
		String s=sc.next(); //used for reading file path
		try
		{
		BufferedReader br = new BufferedReader(new FileReader(s)); //open the file for reading using BufferedReader 
		String line;
		while((line=br.readLine())!=null) //read line by line until 0 lines
		{
			System.out.println(line); //print each line
		}
		br.close();
		}
		catch(IOException e)
		{
			//System.out.print(e);
			e.printStackTrace(); //it gives an IO exception if file not found 
		}
		sc.close();
	}

}
