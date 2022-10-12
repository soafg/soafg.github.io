package week1;

public class day2 {

public static int idx=0;
public static char[] arr;

    public static void main(String[] args) {

        String s ="((())(()))";
        System.out.println(scoreOfParentheses(s));
        System.out.println(solve2(s));
    }

    public static int scoreOfParentheses(String s){
        arr=s.toCharArray();
        return dif();
    }
//    个人觉得比分开形式还要交绝
//利用节点判断 如果节点没有子节点该是1，有则*2
//                （8）                                  (  (  ( )  )  (  ( )  )   )
//        （2）              （2）
//     （1）                   （1）
    public static int dif() {
        int res =0;
        while (idx<arr.length&&arr[idx]=='('){
            idx++;
            if (arr[idx]==')') res+=1;
            else  res+=dif()*2;
            idx++;
        }
        return res;
    }
    public static int solve2 (String s){
        int n =s.length();
        int sbl=0;
        int len=0;
        for (int i = 0; i <n; i++) {
           sbl+=(s.charAt(i)=='('?1:-1);
           if (sbl==0){
               len =i+1;
               break;
           }
        }
        if (n==2){
            return 1;
        }
           if (len==n){
               return 2*solve2(s.substring(1,n-1));
           }else {
               return solve2(s.substring(0,len))+solve2(s.substring(len));
           }
        }

    }

