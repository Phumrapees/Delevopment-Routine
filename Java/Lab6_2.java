import javax.swing.JOptionPane;
public class Lab6_2 {
    public static void main(String[] args) {
        int score[] = new int[10]; // declare and allocate array
        String output = "";
        
        for(int n = 0 ; n < score.length ; n++)
            score[n] = rnd(100,500);
        for(int n = 0; n < score.length ; n++)
        output += "Score " + (n+1) + " : " + score[n] + "\n";
        output += "Minimum value is " + getMin(score) + "\n";
        output += "Maximum value is " + getMax(score) + "\n";
        output += "Average value is " + getAverage(score) + "\n";
        JOptionPane.showMessageDialog(null, output,
            "Display score in array", JOptionPane.INFORMATION_MESSAGE);
    }
    public static int getMin(int data[]) {
        int min = data[0];
        for(int n = 1 ; n < data.length ; n++) {
            if(data[n] < min)
                min = data[n];
        }
        return min;
    }
    public static int getMax(int data[]) {
        int max = data[0];
        for(int n = 1 ; n < data.length ; n++) {
            if(data[n] > max)
                max = data[n];
        }
        return max;
    }
    public static int getAverage(int data[]) {
        int sum = 0;
        for(int n = 0 ; n < data.length ; n++) {
            sum += data[n];
        }
        return sum / data.length;
    }
    public static int rnd(int st, int ed) {
        return (st + (int)(Math.random() * (ed - st + 1)));
    }
}