/* 18. Write a program to perform garbage collection
*/
package files_exceptionhandling;

public class GarbageCollectionEx {
	public void finalize() // invoked each time before object is garbage collected
	{
		System.out.println("object is collected");
	}
	public static void main(String args[])
	{
		GarbageCollectionEx g1 = new GarbageCollectionEx();
		GarbageCollectionEx g2 = new GarbageCollectionEx();
		
		g1=null;
		g2=null;
		System.gc();
	}

}
