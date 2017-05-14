#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */   
    int a, b;
    scanf("%d%d", &a, &b);
    int array[a];
    for (int i = 0; i < a; i++)
    {
        scanf("%d", &array[i]);
    }
    
    for (int i = b; i < a; i++)
    {
        printf("%d ", array[i]);
    }
    
    for (int i = 0; i < b; i++)
    {
        printf("%d ", array[i]);
    }
    printf("\n");
    return 0;
}
