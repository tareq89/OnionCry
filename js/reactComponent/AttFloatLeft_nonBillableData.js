var AttFloatLeft_nonBillableData = React.createClass({
				render: function() {
					return (
						<div className="attFloatLeft" id="nonBillableData">
	                        <div className="attFloatNone">
                                <div className="attFloatNone">
                                    <div align="left">
                                        <span className="astericRed">*</span>
                                        <strong> Service Type: </strong>
                                    </div>
	                                <div align="left">
										<select id="serviceType" name="serviceType">
										<option value="0">- Please Select -</option>
										<option value="1">Lunch</option>
										<option value="2">Clinic</option>
										<option value="3">Other Service</option>
										</select>
                                    </div>
                                </div>
	                            <div className="attFloatNone">
	                                <div align="left">
	                                    <div>
	                                        <span className="astericRed">*</span>
	                                        <strong>Notes:</strong>
	                                    </div>
										<textarea id="notes" name="notes" cols="25" rows="3" maxLength="350" onkeydown="therapTextCounter(&quot;notes&quot;, 350);" onkeyup="therapTextCounter(&quot;notes&quot;, 350);" onfocus="therapTextCounter(&quot;notes&quot;, 350);"></textarea>
										<div id="notes_cnt" nowrap="" align="left" valign="top">
											<font color="black">350 characters left</font>
										</div>
	                                </div>
	                            </div>
	                        </div>
	                    </div>
					);
				}
			});