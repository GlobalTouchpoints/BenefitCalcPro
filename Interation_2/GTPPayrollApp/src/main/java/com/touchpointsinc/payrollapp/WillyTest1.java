package com.touchpointsinc.payrollapp;

import java.sql.Timestamp;
import java.util.Calendar;

public class WillyTest1 {

	public static void main(String[] args) {
		Timestamp createTs = new Timestamp(Calendar.getInstance().getTimeInMillis());
		System.out.println(createTs);
	}
}
