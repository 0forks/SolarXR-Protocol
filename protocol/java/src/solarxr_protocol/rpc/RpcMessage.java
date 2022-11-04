// automatically generated by the FlatBuffers compiler, do not modify

package solarxr_protocol.rpc;

@SuppressWarnings("unused")
public final class RpcMessage {
  private RpcMessage() { }
  public static final byte NONE = 0;
  public static final byte HeartbeatRequest = 1;
  public static final byte HeartbeatResponse = 2;
  public static final byte ResetRequest = 3;
  public static final byte AssignTrackerRequest = 4;
  public static final byte SettingsRequest = 5;
  public static final byte SettingsResponse = 6;
  public static final byte ChangeSettingsRequest = 7;
  public static final byte RecordBVHRequest = 8;
  public static final byte RecordBVHStatus = 9;
  public static final byte SkeletonConfigRequest = 10;
  public static final byte ChangeSkeletonConfigRequest = 11;
  public static final byte SkeletonResetAllRequest = 12;
  public static final byte SkeletonConfigResponse = 13;
  public static final byte OpenSerialRequest = 14;
  public static final byte CloseSerialRequest = 15;
  public static final byte SetWifiRequest = 16;
  public static final byte SerialUpdateResponse = 17;
  public static final byte AutoBoneProcessRequest = 18;
  public static final byte AutoBoneProcessStatusResponse = 19;
  public static final byte AutoBoneEpochResponse = 20;
  public static final byte OverlayDisplayModeRequest = 21;
  public static final byte OverlayDisplayModeChangeRequest = 22;
  public static final byte OverlayDisplayModeResponse = 23;
  public static final byte SerialTrackerRebootRequest = 24;
  public static final byte SerialTrackerGetInfoRequest = 25;
  public static final byte SerialTrackerFactoryResetRequest = 26;

  public static final String[] names = { "NONE", "HeartbeatRequest", "HeartbeatResponse", "ResetRequest", "AssignTrackerRequest", "SettingsRequest", "SettingsResponse", "ChangeSettingsRequest", "RecordBVHRequest", "RecordBVHStatus", "SkeletonConfigRequest", "ChangeSkeletonConfigRequest", "SkeletonResetAllRequest", "SkeletonConfigResponse", "OpenSerialRequest", "CloseSerialRequest", "SetWifiRequest", "SerialUpdateResponse", "AutoBoneProcessRequest", "AutoBoneProcessStatusResponse", "AutoBoneEpochResponse", "OverlayDisplayModeRequest", "OverlayDisplayModeChangeRequest", "OverlayDisplayModeResponse", "SerialTrackerRebootRequest", "SerialTrackerGetInfoRequest", "SerialTrackerFactoryResetRequest", };

  public static String name(int e) { return names[e]; }
}

