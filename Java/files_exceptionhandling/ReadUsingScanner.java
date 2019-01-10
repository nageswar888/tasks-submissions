package files_exceptionhandling;


import java.io.FileReader;
import java.io.FileWriter;
import java.util.Scanner;
public class ReadUsingScanner {
	public static void main(String args[])
	{
		
		Scanner sc = new Scanner(System.in);
		System.out.println("enter file path :");
		String s = sc.next();     //used for reading file path
		
			try
			{
				FileReader fr = new FileReader(s); //pointing the object to a file for reading
				FileWriter fw = new FileWriter(s);  //pointing the object to a file for writing
				fw.write("hai nageswar");
				fw.close();
				int i;
				while((i=fr.read())!= -1)
					System.out.print((char)i);
				fr.close();			
				
			}
			catch(Exception e)
			{
				System.out.print(e);
			}
		
		sc.close();
	}
		
}

