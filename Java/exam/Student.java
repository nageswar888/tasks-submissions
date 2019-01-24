package exam;

import java.io.*;
import java.util.*;

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
	public String toString()
	{
		return this.id+" "+this.name+" "+this.percentage;
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

		Students s[] = new Students[6];
		 s[0] = new Students(id1,name1,pr1);
		 s[1] = new Students(id2,name2,pr2);
		 s[2] = new Students(id3,name3,pr3);
		 s[3] = new Students(id4,name4,pr4);
		
		
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
		ArrayList<Students> al = new ArrayList<Students>();
		FileOutputStream fr = new FileOutputStream(f1);
		ObjectOutputStream out=new ObjectOutputStream(fr);
		
		al.add(s[0]);
		al.add(s[1]);
		al.add(s[2]);
		al.add(s[3]);
		out.writeObject(al);
		
		
		 ObjectInputStream i = new ObjectInputStream(new FileInputStream(f1));
		 ArrayList<Students> obj =(ArrayList<Students>)i.readObject();
		System.out.println(obj);
		
		s[4] = new Students(5,"dff",5);
		
		al.add(s[4]);
		//Students s5 = new Students(5,"name5",5);
		FileOutputStream fr1 = new FileOutputStream(f1);
		ObjectOutputStream out1=new ObjectOutputStream(fr);
		out.writeObject(al);
		
		ObjectInputStream i1 = new ObjectInputStream(new FileInputStream(f1));
		 Students obj1 =(Students)i1.readObject();
		System.out.println(obj1);
		}
		catch(Exception e)
		{
			System.out.print(e);
		}
		
		
	}

}
