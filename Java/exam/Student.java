package exam;

import java.io.*;
import java.util.Scanner;
class Students implements Serializable
{
	int id;
	String name;
	double percentage;
	Students(int i,String n,double p)
	{
		this.id = i;
		this.name = n;
		this.percentage = p;
	}
}
public class Student {

	public static void main(String[] args) {
		
		Scanner in = new Scanner(System.in);
		System.out.println("Enter the details of 1st student");
		int id1 = in.nextInt();
		String name1 = in.next();
		double pr1 = in.nextDouble();
		System.out.println("Enter the details of 2nd student");
		int id2 = in.nextInt();
		String name2 = in.next();
		double pr2 = in.nextDouble();
		System.out.println("Enter the details of 3rd student");
		int id3 = in.nextInt();
		String name3 = in.next();
		double pr3 = in.nextDouble();

		System.out.println("Enter the details of 4th student");
		int id4 = in.nextInt();
		String name4 = in.next();
		double pr4 = in.nextDouble();

		
		Students s1 = new Students(id1,name1,pr1);
		Students s2 = new Students(id2,name2,pr2);
		Students s3 = new Students(id3,name3,pr3);
		Students s4 = new Students(id4,name4,pr4);
		File f = new File("/home/sk-18/Desktop/Students");
		if(!f.exists())
		{
			f.mkdir();
		}
		else
		{
			System.out.println("directory already exist ");
		}
		try{
		File f1 = new File("/home/sk-18/Desktop/Students/file.txt");
		if(!f1.exists())
		{
			f1.createNewFile();
		}
		else
		{
			System.out.println("file already exist ");
		}
		
		FileOutputStream fr = new FileOutputStream(f1);
		ObjectOutputStream out=new ObjectOutputStream(fr);
		out.writeObject(s1);
		out.writeObject(s2);
		out.writeObject(s3);
		out.writeObject(s4);
		
		
		 ObjectInputStream i = new ObjectInputStream(new FileInputStream(f1));

		
		}
		catch(Exception e)
		{
			System.out.print(e);
		}
		
		
	}

}
