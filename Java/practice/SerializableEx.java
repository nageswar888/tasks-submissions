package oopconcepts;

import java.io.*;

class Serialize implements Serializable {
	static final long SerialVersionUID = 12345L;
	String name;
	int marks;
	transient int rollno;
	Serialize(String a,int b,int c)
	{
		name = a;
		marks = b;
		rollno = c;
	}
	void print(Serialize se)
	{
		System.out.println("student detalis are");
		System.out.println("name is :"+name);
		System.out.println("marks are"+marks);
		System.out.println("rollno is :"+rollno);
	}
}
public class SerializableEx {
	
	public static void main(String[] args) throws Exception{
		
		Serialize se1 = new Serialize("nageswar",80,1);
		Serialize se2 = new Serialize("kiran",70,2);
		Serialize se3 = new Serialize("naresh",85,3);
		
		FileOutputStream f = new FileOutputStream("/home/sk-18/Desktop/files/serialize.ser");
		ObjectOutputStream ob = new ObjectOutputStream(f);
		ob.writeObject(se1);
		ob.writeObject(se2);
		ob.writeObject(se3);
		System.out.println(se1);
		System.out.println(se2);
		System.out.println(se3);
	}

}
