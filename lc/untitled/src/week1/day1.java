package week1;

import com.sun.jdi.Value;

import java.util.*;

public class day1 {
    public static void main(String[] args) {
        Integer [] nums1 ={12,24,8,32};
        Integer [] nums2 ={13,25,32,11};
         int[] ans=advantageNumbers(nums1,nums2);

        System.out.println(Arrays.toString(ans));
    }
    public static int [] advantageNumbers(Integer []nums1,Integer[]nums2){
        int n=nums1.length;
        Integer [] idx1=new Integer[n];
        Integer [] idx2=new Integer[n];
        for (int i = 0; i <n; i++) {
            idx1[i]=i;
            idx2[i]=i;
        }
        Arrays.sort(idx1,(o1,o2)->nums1[o1]-nums1[o2]);
        Arrays.sort(idx2,(o1,o2)->nums2[o1]-nums2[o2]);
//        System.out.println(Arrays.toString(idx1));
//        System.out.println(Arrays.toString(idx2));
//        顺序已经排成
//       [2, 0, 1, 3]  {8,12,24,32}  {12,24,8,32}
//       [3, 0, 1, 2]  {11,13,25,32} {13,25,32,11}

//       本题的核心是解决尽可能的让nums1拥有最多有优势，{8,12,24,32} nums1
//                                                   i
//                                                  {11,13,25,32} nums2
//                                                 left        right
//        8>11?  ture->把nums1[idx[i]]给ans[i],left++,既是说明8是优势数/ false->说明8是辣鸡数，
//        用他把nums2最大的数(idx[right])的位置给吃掉，
//        既是ans[idx2[right]]=nums1[idx1[i]]
        int left =0;
        int right=n-1;
        int [] ans =new int[n];
        for (int i = 0; i < n; ++i) {
            if (nums1[idx1[i]]>nums2[idx2[left]]){
                ans[idx2[left]]=nums1[idx1[i]];
                ++left;
            }else {
                ans[idx2[right]]=nums1[idx1[i]];
                --right;
            }
        }
        return ans;
    }
}