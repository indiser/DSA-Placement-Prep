// Date: 01/07/2026
#include<iostream>
#include<vector>
#include<unordered_map>
#include<queue>
#include<algorithm>
using namespace std;


// Time Complexity: O(n^2 logn)
// Space Complexity: O(n)
class Solution
{
    public:
        int kthSamallest(vector<vector<int>> &matrix, int k)
        {
            vector<int> ans;
            int n = matrix.size();
            for (int i = 0; i < n; i++)
            {
                for (int j = 0; j < n; j++)
                {
                    ans.push_back(matrix[i][j]);
                }
            }
            sort(ans.begin(), ans.end());
            return ans[k-1];
        }
};

int main()
{
    vector<vector<int>> matrix = {{1, 5, 9}, {10, 11, 13}, {12, 13, 15}};
    int k = 8;

    Solution s;
    cout << s.kthSamallest(matrix, k)<<endl;
    return 0;
}