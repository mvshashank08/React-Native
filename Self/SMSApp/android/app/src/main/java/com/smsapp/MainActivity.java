package com.smsapp;
import android.os.Bundle;
import com.facebook.react.ReactActivity;
import android.content.Intent;
import com.tkporter.sendsms.SendSMSPackage;
import com.cboy.rn.splashscreen.SplashScreen;
public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "SMSApp";
    }
    @Override
	public void onActivityResult(int requestCode, int resultCode, Intent data) {
	    //probably some other stuff here
	    SendSMSPackage.getInstance().onActivityResult(requestCode, resultCode, data);
	}
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  // here
        super.onCreate(savedInstanceState);
    }
}
