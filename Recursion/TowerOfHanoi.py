n = 1

def towerOfHanoi(d,A,B,C):
    global n
    if d>0:
        towerOfHanoi(d-1,A,C,B)
        print(f"{n}--> move disk {d} from {A} to {C}")
        n += 1
        print()
        towerOfHanoi(d-1,B,A,C)

d = int(input())

towerOfHanoi(d,'A','B','C')