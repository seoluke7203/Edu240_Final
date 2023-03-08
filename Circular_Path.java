
public class Circular_Path{ 
    
    public static void main(String[] args) {
        String S = "A?ACCA??A";
        int out_ = solve(S);
        System.out.println(out_);
    }

    private static int solve(String S) {
        int sum_A = 0;
        int sum_C = 0;
        int sum_Q = 0;

        for (int i = 0; i < S.length(); i++){
            if (S.charAt(i) == 'A'){
                System.out.println("A");
                sum_A++;
                sum_C--;
            }
            if (S.charAt(i) == 'C'){
                System.out.println("C");
                sum_C++;
                sum_A--;
            }
            if (S.charAt(i) == '?'){
                System.out.println("?");
                sum_Q++;
            }
        }
        if (sum_A > sum_C){
            return sum_A + sum_Q ;
        } else if (sum_C > sum_A) {
            return sum_C + sum_Q ;
        } else{
            return sum_Q;
        }
    } 
}