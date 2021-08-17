Run a node process that starts two shell processes, killing the first when the second one exits.

```
$ ./supervisor.js 
Process 1: running for 1 seconds
Process 1: running for 2 seconds
Process 1: running for 3 seconds
Process 1: running for 4 seconds
Process 1: running for 5 seconds
Process2: started, will run for 10 seconds then exit...
Process 1: running for 6 seconds
Process 1: running for 7 seconds
Process 1: running for 8 seconds
Process 1: running for 9 seconds
Process 1: running for 10 seconds
Process 1: running for 11 seconds
Process 1: running for 12 seconds
Process 1: running for 13 seconds
Process 1: running for 14 seconds
Process2 finished, killing process1
```