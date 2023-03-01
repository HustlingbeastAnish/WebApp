/*
.----------------.  .-----------------. .----------------.  .----------------.  .----------------.
| .--------------. || .--------------. || .--------------. || .--------------. || .--------------. |
| |      __      | || | ____  _____  | || |     _____    | || |    _______   | || |  ____  ____  | |
| |     /  \     | || ||_   \|_   _| | || |    |_   _|   | || |   /  ___  |  | || | |_   ||   _| | |
| |    / /\ \    | || |  |   \ | |   | || |      | |     | || |  |  (__ \_|  | || |   | |__| |   | |
| |   / ____ \   | || |  | |\ \| |   | || |      | |     | || |   '.___`-.   | || |   |  __  |   | |
| | _/ /    \ \_ | || | _| |_\   |_  | || |     _| |_    | || |  |`\____) |  | || |  _| |  | |_  | |
| ||____|  |____|| || ||_____|\____| | || |    |_____|   | || |  |_______.'  | || | |____||____| | |
| |              | || |              | || |              | || |              | || |              | |
| '--------------' || '--------------' || '--------------' || '--------------' || '--------------' |
 '----------------'  '----------------'  '----------------'  '----------------'  '----------------'
*/

#include <bits/stdc++.h>
#include <algorithm>
#define lli long long int
#define li long int
#define ll long long
#define vi vector<lli>
#define umii unordered_map<lli, lli>
#define usi unordered_set<lli>
#define usc unordered_set<char>
#define umci unordered_map<char, lli>
#define vii vector<pair<lli, lli>>
#define pii pair<lli, lli>
#define w(t)  \
    lli t;    \
    cin >> t; \
    while (t--)
#define mod 1000000007
#define ld long double
#define all(x) x.begin(), x.end()
#define F first
#define S second
#define PB push_back
#define MP make_pair
#define REP(i, a, b) for (lli i = a; i < b; i++)
using namespace std;
lli f[100001];
class DisjointSet
{
    vi rank, size, parent;

public:
    DisjointSet(lli n)
    {
        rank.resize(n + 1, 0);
        parent.resize(n + 1);
        size.resize(n + 1);
        for (lli i = 0; i <= n; i++)
        {
            parent[i] = i;
            size[i] = 1;
        }
    }
    lli findUltimatePar(lli node)
    {
        if (node == parent[node])
            return node;
        return parent[node] = findUltimatePar(parent[node]);
    }
    void UnionByRank(lli u, lli v)
    {
        lli ulp_u = findUltimatePar(u);
        lli ulp_v = findUltimatePar(v);

        if (ulp_u == ulp_v)
            return;

        if (rank[ulp_u] < rank[ulp_v])
        {
            parent[ulp_u] == ulp_v;
        }
        else if (rank[ulp_u] > rank[ulp_v])
        {
            parent[ulp_v] = ulp_u;
        }
        else
        {
            parent[ulp_v] = ulp_u;
            rank[ulp_u]++;
        }
    }
    void UnionBySize(lli u, lli v)
    {
        lli ulp_u = findUltimatePar(u);
        lli ulp_v = findUltimatePar(v);
        if (ulp_u == ulp_v)
            return;
        if (size[ulp_u] > size[ulp_v])
        {
            parent[ulp_v] = ulp_u;
            size[ulp_u] += size[ulp_v];
        }
        else
        {
            parent[ulp_u] = ulp_v;
            size[ulp_v] += size[ulp_u];
        }
    }
};
void sieve(vector<bool> &prime)
{
    prime[0] = 0;
    prime[1] = 0;
    int n = prime.size() - 1;
    for (int i = 2; i * i <= n; i++)
        if (prime[i])
            for (int j = i * i; j <= n; j += i)
                prime[j] = false;
}
void segmentedSieve(int l, int r)
{
    int n = 1e6;
    vector<bool> prime(n + 1, true);
    sieve(prime);
    prime[0] = false;
    prime[1] = false;
    vector<int> ds;
    for (int i = 0; i * i <= r; i++)
    {
        if (prime[i])
            ds.push_back(i);
    }
    vector<bool> dummy(r - l + 1, true);
    for (auto pr : ds)
    {
        int fm = (l / pr) * pr;
        if (fm < l)
            fm += pr;
        for (int j = max(fm, pr * pr); j <= r; j += pr)
        {
            dummy[j - l] = false;
        }
    }
    vector<int> fk;
    for (int i = l; i <= r; i++)
    {
        if (dummy[i - l])
            fk.push_back(i);
    }
    for (auto it : fk)
    {
        cout << it << " ";
    }
    cout << endl;
}

long power(long a, long b)
{
    long ans = 1;
    while (b > 0)
    {
        if ((b % 2) == 1)
        {
            ans = (ans * a) % mod;
        }
        b /= 2;
        a = (a * a) % mod;
    }
    return ans;
}
lli negMod(lli n)
{
    if (n < 0)
    {
        n = abs(n) % mod;
        return (-n + mod) % mod;
    }
    return n % mod;
}
void solve()
{
    lli n, m;
    cin >> n >> m;

    vi q(m);
    vi ans(n, -1);
    REP(i, 0, m)
    cin >> q[i];

    unordered_set<lli> st;
    umii mp;
    lli i = n - 1;
    lli j = 1;
    for (auto x : q)
    {
        if (st.find(x) == st.end())
        {
            st.insert(x);
            if (i >= 0)
                ans[i] = j;
            i--;
        }
        j++;
    }
    for (auto it : ans)
    {
        cout << it << " ";
    }
    cout << endl;
}
int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    w(t)
    {
        solve();
    }
    return 0;
}