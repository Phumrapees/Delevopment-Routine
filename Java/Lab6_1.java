public class Lab6_1 {
    public static void main(String[] args) {
        int X[] = new int[10]; // declare and allocate array
        int Y[] = {10, 20, 30, 40, 50, 60, 70, 80, 90, 100}; // declare and initialize array
        final int Array_Size = 10;
        int Z[];

        Z = new int[Array_Size]; // allocate array

        for(int i = 0 ; i < X.length ; i++) X[i] = i;
        for(int i = 0 ; i < Z.length ; i++)
            Z[i] += X[i] * 5 + Y[i];

        System.out.println("index \tArray X \tArray Y \tArray Z");
        for(int i = 0 ; i < X.length ; i++) {
            System.out.print( "\t" + X[i] + "\t\t" + X[i]);
            System.out.print(" \t\t" + Y[i] + " \t\t" + Z[i]);
        }
    }
}