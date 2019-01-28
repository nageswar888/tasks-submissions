package test;

import java.util.*;
import java.io.*;


class Student implements Serializable
{
	int id;
	String name;
	Student(int id,String name)
	{
		this.id = id;
		this.name = name;
	}
}
class Address implements Serializable
{
	int doorNo;
	String Street,city,state;
	Address(int doorNo,String Street,String city,String state)
	{
		this.doorNo = doorNo;
		this.Street = Street;
		this.city = city;
		this.state = state;
	}
}
public class College {

	public static void main(String[] args) {
		HashMap<Student,Address> hashmap= new HashMap<Student,Address>();
		
		Student[] student = new Student[2];
		student[0] = new Student(1,"nag");
		student[1] = new Student(2,"praveen");
		
		Address[] address = new Address[2];
		address[0] = new Address(100,"street 1","hyd","ts");
		address[1] = new Address(110,"street 2","hyd","ts");
		
		hashmap.put(student[0],address[0]);
		hashmap.put(student[1],address[1]);
		try {
			System.out.println("Serialization");
		FileOutputStream fout = new FileOutputStream("/home/sk-18/Desktop/serialization.txt");
		ObjectOutputStream out=new ObjectOutputStream(fout); 
		 out.writeObject(hashmap);  
		 out.close();
		 
		 
		 System.out.println("Deserialization");
		 
		 ObjectInputStream objIn = new ObjectInputStream(new FileInputStream("/home/sk-18/Desktop/serialization.txt"));
			HashMap<Student,Address> displayData =(HashMap<Student,Address>)objIn.readObject();
			System.out.println("object after deserialization");
			
			for(Map.Entry m:hashmap.entrySet()){ 
				Student stu = (Student)m.getKey();
				Address addr = (Address)m.getValue();
		           System.out.println(stu.id+" "+stu.name+" "+addr.doorNo+" "+addr.Street+" "+addr.city+" "+addr.state);    
			}
			
		}
		catch(Exception e)
		{
			System.out.println(e);
		}

	}

}
