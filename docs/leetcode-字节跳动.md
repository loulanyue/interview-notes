题目一：

给定一个字符串，找出不含有重复字符的 最长子串 的长度。

示例：

给定 "abcabcbb" ，没有重复字符的最长子串是 "abc" ，那么长度就是3。

给定 "bbbbb" ，最长的子串就是 "b" ，长度是1。

给定 "pwwkew" ，最长子串是 "wke" ，长度是3。请注意答案必须是一个子串，"pwke" 是 子序列 而不是子串

JAVA实现：
class Solution {
    public int lengthOfLongestSubstring(String s) {
        if(s.length()==0){
			return 0;
		}
		int maxLength=1;
		List<Character> list=new ArrayList<Character>();
		list.add(s.charAt(0));
		for(int i=1;i<s.length();i++){
			if(list.contains(s.charAt(i))){
				int index=list.indexOf(s.charAt(i));
				list=list.subList(index+1, list.size());
				list.add(s.charAt(i));
//				System.out.println(list);
				maxLength=Math.max(maxLength, list.size());
			}else{
				list.add(s.charAt(i));
				maxLength=Math.max(maxLength, list.size());
			}
		}
		return maxLength;
    }
}
