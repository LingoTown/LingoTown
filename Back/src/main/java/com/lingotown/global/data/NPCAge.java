package com.lingotown.global.data;

public enum NPCAge {
    teenager(10), thirty(30), fifty(50);

    public int age;

    NPCAge(int age) {
        this.age = age;
    }

    public int getAge() {
        return age;
    }
}
