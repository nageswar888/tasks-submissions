/* Ways for requesting JVM to run Garbage Collector */
package files_exceptionhandling;

public class RequestingWays {
	public void finalize()
	{
		System.out.println("object collected");
	}

	public static void main(String[] args) {
		RequestingWays r1 = new RequestingWays();
		RequestingWays r2 = new RequestingWays();
		
		r1=null;
		System.gc();
		r2=null;
		Runtime.getRuntime();

	}

}
