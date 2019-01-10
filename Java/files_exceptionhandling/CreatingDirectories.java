/*12. Write a program for following 
 a. create a directory 
 b. In that directory add a file called text.txt
 c. add content "This is a demo text file" in text.txt
 d. Read the text.txt file
*/
package files_exceptionhandling;

import java.io.File;
import java.io.FileWriter;
import java.io.FileReader;
public class CreatingDirectories 
{
	public static void main(String args[])
	{
		File file = new File("/home/sk-18/Desktop/Directory"); 
		if(!file.exists())
		{
			file.mkdir();  //create a directory in desktop
		}
		if(file.exists())
		{
			System.out.println("directory exists");
		}
		
		File files = new File("/home/sk-18/Desktop/Directory/sub1/sub3"); 

		File files1 = new File("/home/sk-18/Desktop/Directory/sub2");
		if(!files.exists() && !files1.exists())
		{
			files.mkdirs();  //create a sub1 directory Directory and sub3 in sub1
			files1.mkdirs(); //create a sub2 directory in Directory
		}
		File files2 = new File("/home/sk-18/Desktop/Directory/text.txt"); 
		{
			try
			{
			if(!files2.exists())  //exists() method is for finding whether the file present or not
			{
				files2.createNewFile();
			}
			FileWriter fo = new FileWriter(files2);
			fo.write("This is demo text file");
			fo.close();
			 
			FileReader fr = new FileReader(files2);
			 int i;
			 while((i=fr.read()) != -1)
			 {
				 System.out.print((char)  i);
			 }
			 fr.close();
			}
		catch(Exception e)
		{
			System.out.println(e);
		}
		}
		
	}

}
