// Date: 09/07/2026
#include<iostream>
#include<vector>
#include<unordered_map>
#include<queue>
using namespace std;

// Time Complexity: O(n^2 logn)
// Space Complexity: O(n^2)
class Solution
{
    public:
        int manHattenDist(vector<vector<int>> &points, int p1, int p2)
        {
            return abs(points[p1][0] - points[p2][0]) + abs(points[p1][1] - points[p2][1]);
            // |X1 - X2| + |Y1 - Y2|
        }
        int minCostConnectPoints(vector<vector<int>> &points)
        {
            int n = points.size();
            priority_queue<pair<int,int>, vector<pair<int,int>>, greater<pair<int,int>>> pq;
            vector<bool> mstSet(n, false);
            int mstCost = 0;
            pq.push({0, 0});

            while(pq.size() > 0)
            {
                auto p = pq.top();
                pq.pop();
                int node = p.second;
                int weight = p.first;

                if(mstSet[node]) continue;

                mstSet[node] = true;
                mstCost += weight;

                for (int i = 0; i < n; i++)
                {
                    if(!mstSet[i])
                    {
                        int edgeWt = manHattenDist(points, node, i);
                        pq.push({edgeWt, i});
                    }
                }
            }

            return mstCost;
        }
};

int main()
{
    vector<vector<int>> points = {
        {0, 0},
        {2, 2},
        {3, 10},
        {5, 2},
        {7, 0}
    };

    Solution s;
    cout << s.minCostConnectPoints(points)<< endl;

    return 0;
}