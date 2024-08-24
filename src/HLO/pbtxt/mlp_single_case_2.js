const text = `
HloModule SyncTensorsGraph.590, input_output_alias={ {0}: (2, {}, must-alias), {1}: (1, {}, must-alias), {2}: (4, {}, must-alias), {3}: (5, {}, must-alias), {4}: (6, {}, must-alias), {5}: (7, {}, must-alias), {6}: (3, {}, must-alias), {7}: (8, {}, must-alias) }

%MaxComputation.92 (x.93: f32[], y.94: f32[]) -> f32[] {
  %x.93 = f32[] parameter(0)
  %y.94 = f32[] parameter(1)
  ROOT %maximum.95 = f32[] maximum(f32[] %x.93, f32[] %y.94)
}

%AddComputation.101 (x.102: f32[], y.103: f32[]) -> f32[] {
  %x.102 = f32[] parameter(0)
  %y.103 = f32[] parameter(1)
  ROOT %add.104 = f32[] add(f32[] %x.102, f32[] %y.103)
}

%AddComputation.136 (x.137: f32[], y.138: f32[]) -> f32[] {
  %x.137 = f32[] parameter(0)
  %y.138 = f32[] parameter(1)
  ROOT %add.139 = f32[] add(f32[] %x.137, f32[] %y.138)
}

%AddComputation.148 (x.149: f32[], y.150: f32[]) -> f32[] {
  %x.149 = f32[] parameter(0)
  %y.150 = f32[] parameter(1)
  ROOT %add.151 = f32[] add(f32[] %x.149, f32[] %y.150)
}

%MaxComputation.257 (x.258: f32[], y.259: f32[]) -> f32[] {
  %x.258 = f32[] parameter(0)
  %y.259 = f32[] parameter(1)
  ROOT %maximum.260 = f32[] maximum(f32[] %x.258, f32[] %y.259)
}

%AddComputation.266 (x.267: f32[], y.268: f32[]) -> f32[] {
  %x.267 = f32[] parameter(0)
  %y.268 = f32[] parameter(1)
  ROOT %add.269 = f32[] add(f32[] %x.267, f32[] %y.268)
}

%AddComputation.301 (x.302: f32[], y.303: f32[]) -> f32[] {
  %x.302 = f32[] parameter(0)
  %y.303 = f32[] parameter(1)
  ROOT %add.304 = f32[] add(f32[] %x.302, f32[] %y.303)
}

%AddComputation.313 (x.314: f32[], y.315: f32[]) -> f32[] {
  %x.314 = f32[] parameter(0)
  %y.315 = f32[] parameter(1)
  ROOT %add.316 = f32[] add(f32[] %x.314, f32[] %y.315)
}

%AddComputation.360 (x.361: f32[], y.362: f32[]) -> f32[] {
  %x.361 = f32[] parameter(0)
  %y.362 = f32[] parameter(1)
  ROOT %add.363 = f32[] add(f32[] %x.361, f32[] %y.362)
}

%AddComputation.377 (x.378: f32[], y.379: f32[]) -> f32[] {
  %x.378 = f32[] parameter(0)
  %y.379 = f32[] parameter(1)
  ROOT %add.380 = f32[] add(f32[] %x.378, f32[] %y.379)
}

%AddComputation.438 (x.439: f32[], y.440: f32[]) -> f32[] {
  %x.439 = f32[] parameter(0)
  %y.440 = f32[] parameter(1)
  ROOT %add.441 = f32[] add(f32[] %x.439, f32[] %y.440)
}

%AddComputation.455 (x.456: f32[], y.457: f32[]) -> f32[] {
  %x.456 = f32[] parameter(0)
  %y.457 = f32[] parameter(1)
  ROOT %add.458 = f32[] add(f32[] %x.456, f32[] %y.457)
}

%AddComputation.516 (x.517: f32[], y.518: f32[]) -> f32[] {
  %x.517 = f32[] parameter(0)
  %y.518 = f32[] parameter(1)
  ROOT %add.519 = f32[] add(f32[] %x.517, f32[] %y.518)
}

%AddComputation.533 (x.534: f32[], y.535: f32[]) -> f32[] {
  %x.534 = f32[] parameter(0)
  %y.535 = f32[] parameter(1)
  ROOT %add.536 = f32[] add(f32[] %x.534, f32[] %y.535)
}

%AddComputation.577 (x.578: f32[], y.579: f32[]) -> f32[] {
  %x.578 = f32[] parameter(0)
  %y.579 = f32[] parameter(1)
  ROOT %add.580 = f32[] add(f32[] %x.578, f32[] %y.579)
}

%AddComputation.583 (x.584: f32[], y.585: f32[]) -> f32[] {
  %x.584 = f32[] parameter(0)
  %y.585 = f32[] parameter(1)
  ROOT %add.586 = f32[] add(f32[] %x.584, f32[] %y.585)
}

ENTRY %SyncTensorsGraph.590 (p0.1: f32[], p1.11: f32[120], p2.19: f32[120,784], p3.28: f32[31,784], p4.38: f32[84,120], p5.48: f32[84], p6.66: f32[10,84], p7.76: f32[10], p8.109: s64[31], p9.197: f32[31,784], p10.274: s64[31]) -> (f32[120,784], f32[120], f32[84,120], f32[84], f32[10,84], /*index=5*/f32[10], f32[31,784], s64[31], f32[31,10], f32[]) {
  %p2.19 = f32[120,784]{1,0} parameter(2), frontend_attributes={neff_input_names="input2"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/module.py" source_line=1158}
  %p9.197 = f32[31,784]{1,0} parameter(9), frontend_attributes={neff_input_names="input9"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="train.py" source_line=69}
  %custom-call.26 = f32[120,784]{1,0} custom-call(f32[120,784]{1,0} %p2.19), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %transpose.196 = f32[784,120]{0,1} transpose(f32[120,784]{1,0} %custom-call.26), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %dot.198 = f32[31,120]{1,0} dot(f32[31,784]{1,0} %p9.197, f32[784,120]{0,1} %transpose.196), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %p1.11 = f32[120]{0} parameter(1), frontend_attributes={neff_input_names="input1"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/module.py" source_line=1158}
  %custom-call.27 = f32[120]{0} custom-call(f32[120]{0} %p1.11), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.202 = f32[31,120]{1,0} broadcast(f32[120]{0} %custom-call.27), dimensions={1}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %add.203 = f32[31,120]{1,0} add(f32[31,120]{1,0} %dot.198, f32[31,120]{1,0} %broadcast.202), metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %constant.204 = f32[] constant(0), metadata={op_type="aten__relu" op_name="aten__relu" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1471}
  %broadcast.205 = f32[31,120]{1,0} broadcast(f32[] %constant.204), dimensions={}, metadata={op_type="aten__relu" op_name="aten__relu" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1471}
  %maximum.206 = f32[31,120]{1,0} maximum(f32[31,120]{1,0} %add.203, f32[31,120]{1,0} %broadcast.205), metadata={op_type="aten__relu" op_name="aten__relu" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1471}
  %constant.330 = f32[] constant(0), metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %broadcast.333 = f32[31,120]{1,0} broadcast(f32[] %constant.330), dimensions={}, metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %compare.334 = pred[31,120]{1,0} compare(f32[31,120]{1,0} %maximum.206, f32[31,120]{1,0} %broadcast.333), direction=GT, metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %p4.38 = f32[84,120]{1,0} parameter(4), frontend_attributes={neff_input_names="input4"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/module.py" source_line=1158}
  %custom-call.28 = f32[84,120]{1,0} custom-call(f32[84,120]{1,0} %p4.38), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %transpose.223 = f32[120,84]{0,1} transpose(f32[84,120]{1,0} %custom-call.28), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %dot.224 = f32[31,84]{1,0} dot(f32[31,120]{1,0} %maximum.206, f32[120,84]{0,1} %transpose.223), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %p5.48 = f32[84]{0} parameter(5), frontend_attributes={neff_input_names="input5"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/module.py" source_line=1158}
  %custom-call.29 = f32[84]{0} custom-call(f32[84]{0} %p5.48), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.228 = f32[31,84]{1,0} broadcast(f32[84]{0} %custom-call.29), dimensions={1}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %add.229 = f32[31,84]{1,0} add(f32[31,84]{1,0} %dot.224, f32[31,84]{1,0} %broadcast.228), metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %constant.230 = f32[] constant(0), metadata={op_type="aten__relu" op_name="aten__relu" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1471}
  %broadcast.231 = f32[31,84]{1,0} broadcast(f32[] %constant.230), dimensions={}, metadata={op_type="aten__relu" op_name="aten__relu" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1471}
  %maximum.232 = f32[31,84]{1,0} maximum(f32[31,84]{1,0} %add.229, f32[31,84]{1,0} %broadcast.231), metadata={op_type="aten__relu" op_name="aten__relu" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1471}
  %constant.323 = f32[] constant(0), metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %broadcast.326 = f32[31,84]{1,0} broadcast(f32[] %constant.323), dimensions={}, metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %compare.327 = pred[31,84]{1,0} compare(f32[31,84]{1,0} %maximum.232, f32[31,84]{1,0} %broadcast.326), direction=GT, metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %p10.274 = s64[31]{0} parameter(10), frontend_attributes={neff_input_names="input10"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="train.py" source_line=70}
  %broadcast.280 = s64[31,10]{1,0} broadcast(s64[31]{0} %p10.274), dimensions={0}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %iota.1 = s64[31,10]{1,0} iota(), iota_dimension=1, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %compare.283 = pred[31,10]{1,0} compare(s64[31,10]{1,0} %broadcast.280, s64[31,10]{1,0} %iota.1), direction=EQ, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.278 = f32[] constant(1), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.285 = f32[31,10]{1,0} broadcast(f32[] %constant.278), dimensions={}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.277 = f32[] constant(0), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.284 = f32[31,10]{1,0} broadcast(f32[] %constant.277), dimensions={}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %select.286 = f32[31,10]{1,0} select(pred[31,10]{1,0} %compare.283, f32[31,10]{1,0} %broadcast.285, f32[31,10]{1,0} %broadcast.284), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %negate.287 = f32[31,10]{1,0} negate(f32[31,10]{1,0} %select.286), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.290 = s64[] constant(-100), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.291 = s64[31]{0} broadcast(s64[] %constant.290), dimensions={}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %compare.292 = pred[31]{0} compare(s64[31]{0} %p10.274, s64[31]{0} %broadcast.291), direction=NE, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.293 = f32[] constant(1), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.1 = f32[31]{0} broadcast(f32[] %constant.293), dimensions={}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.295 = f32[] constant(0), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.2 = f32[31]{0} broadcast(f32[] %constant.295), dimensions={}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %select.0 = f32[31]{0} select(pred[31]{0} %compare.292, f32[31]{0} %broadcast.1, f32[31]{0} %broadcast.2), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.4 = f32[31,10]{1,0} broadcast(f32[31]{0} %select.0), dimensions={0}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %multiply.299 = f32[31,10]{1,0} multiply(f32[31,10]{1,0} %broadcast.4, f32[31,10]{1,0} %select.286), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %multiply.309 = f32[31,10]{1,0} multiply(f32[31,10]{1,0} %negate.287, f32[31,10]{1,0} %multiply.299), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.300 = f32[] constant(0), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %reduce.305 = f32[] reduce(f32[31,10]{1,0} %multiply.299, f32[] %constant.300), dimensions={0,1}, to_apply=%AddComputation.301, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %compare.307 = pred[] compare(f32[] %reduce.305, f32[] %constant.300), direction=NE, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.306 = f32[] constant(1), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %select.308 = f32[] select(pred[] %compare.307, f32[] %reduce.305, f32[] %constant.306), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.310 = f32[31,10]{1,0} broadcast(f32[] %select.308), dimensions={}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %divide.311 = f32[31,10]{1,0} divide(f32[31,10]{1,0} %multiply.309, f32[31,10]{1,0} %broadcast.310), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %p6.66 = f32[10,84]{1,0} parameter(6), frontend_attributes={neff_input_names="input6"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/module.py" source_line=1158}
  %custom-call.30 = f32[10,84]{1,0} custom-call(f32[10,84]{1,0} %p6.66), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %transpose.249 = f32[84,10]{0,1} transpose(f32[10,84]{1,0} %custom-call.30), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %dot.250 = f32[31,10]{1,0} dot(f32[31,84]{1,0} %maximum.232, f32[84,10]{0,1} %transpose.249), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %p7.76 = f32[10]{0} parameter(7), frontend_attributes={neff_input_names="input7"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/module.py" source_line=1158}
  %custom-call.31 = f32[10]{0} custom-call(f32[10]{0} %p7.76), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.254 = f32[31,10]{1,0} broadcast(f32[10]{0} %custom-call.31), dimensions={1}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %add.255 = f32[31,10]{1,0} add(f32[31,10]{1,0} %dot.250, f32[31,10]{1,0} %broadcast.254), metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %constant.256 = f32[] constant(-inf), metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %reduce.261 = f32[31]{0} reduce(f32[31,10]{1,0} %add.255, f32[] %constant.256), dimensions={1}, to_apply=%MaxComputation.257, metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %broadcast.262 = f32[31,10]{1,0} broadcast(f32[31]{0} %reduce.261), dimensions={0}, metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %subtract.263 = f32[31,10]{1,0} subtract(f32[31,10]{1,0} %add.255, f32[31,10]{1,0} %broadcast.262), metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %exponential.264 = f32[31,10]{1,0} exponential(f32[31,10]{1,0} %subtract.263), metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %constant.265 = f32[] constant(0), metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %reduce.270 = f32[31]{0} reduce(f32[31,10]{1,0} %exponential.264, f32[] %constant.265), dimensions={1}, to_apply=%AddComputation.266, metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %log.271 = f32[31]{0} log(f32[31]{0} %reduce.270), metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %broadcast.272 = f32[31,10]{1,0} broadcast(f32[31]{0} %log.271), dimensions={0}, metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %subtract.273 = f32[31,10]{1,0} subtract(f32[31,10]{1,0} %subtract.263, f32[31,10]{1,0} %broadcast.272), metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %exponential.318 = f32[31,10]{1,0} exponential(f32[31,10]{1,0} %subtract.273), metadata={op_type="aten___log_softmax_backward_data" op_name="aten___log_softmax_backward_data"}
  %constant.312 = f32[] constant(0), metadata={op_type="aten___log_softmax_backward_data" op_name="aten___log_softmax_backward_data"}
  %reduce.317 = f32[31]{0} reduce(f32[31,10]{1,0} %divide.311, f32[] %constant.312), dimensions={1}, to_apply=%AddComputation.313, metadata={op_type="aten___log_softmax_backward_data" op_name="aten___log_softmax_backward_data"}
  %broadcast.319 = f32[31,10]{1,0} broadcast(f32[31]{0} %reduce.317), dimensions={0}, metadata={op_type="aten___log_softmax_backward_data" op_name="aten___log_softmax_backward_data"}
  %multiply.320 = f32[31,10]{1,0} multiply(f32[31,10]{1,0} %exponential.318, f32[31,10]{1,0} %broadcast.319), metadata={op_type="aten___log_softmax_backward_data" op_name="aten___log_softmax_backward_data"}
  %subtract.321 = f32[31,10]{1,0} subtract(f32[31,10]{1,0} %divide.311, f32[31,10]{1,0} %multiply.320), metadata={op_type="aten___log_softmax_backward_data" op_name="aten___log_softmax_backward_data"}
  %dot.322 = f32[31,84]{1,0} dot(f32[31,10]{1,0} %subtract.321, f32[10,84]{1,0} %custom-call.30), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %constant.324 = f32[] constant(0), metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %broadcast.325 = f32[31,84]{1,0} broadcast(f32[] %constant.324), dimensions={}, metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %select.328 = f32[31,84]{1,0} select(pred[31,84]{1,0} %compare.327, f32[31,84]{1,0} %dot.322, f32[31,84]{1,0} %broadcast.325), metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %dot.329 = f32[31,120]{1,0} dot(f32[31,84]{1,0} %select.328, f32[84,120]{1,0} %custom-call.28), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %constant.331 = f32[] constant(0), metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %broadcast.332 = f32[31,120]{1,0} broadcast(f32[] %constant.331), dimensions={}, metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %select.335 = f32[31,120]{1,0} select(pred[31,120]{1,0} %compare.334, f32[31,120]{1,0} %dot.329, f32[31,120]{1,0} %broadcast.332), metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %transpose.336 = f32[784,31]{0,1} transpose(f32[31,784]{1,0} %p9.197), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %dot = f32[120,784]{0,1} dot(f32[31,120]{1,0} %select.335, f32[784,31]{0,1} %transpose.336), lhs_contracting_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %custom-call.32 = f32[120,784]{1,0} custom-call(f32[120,784]{0,1} %dot), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %p3.28 = f32[31,784]{1,0} parameter(3), frontend_attributes={neff_input_names="input3"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="train.py" source_line=69}
  %custom-call.33 = f32[120,784]{1,0} custom-call(f32[120,784]{1,0} %p2.19), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %transpose.27 = f32[784,120]{0,1} transpose(f32[120,784]{1,0} %custom-call.33), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %dot.29 = f32[31,120]{1,0} dot(f32[31,784]{1,0} %p3.28, f32[784,120]{0,1} %transpose.27), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %custom-call.34 = f32[120]{0} custom-call(f32[120]{0} %p1.11), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.33 = f32[31,120]{1,0} broadcast(f32[120]{0} %custom-call.34), dimensions={1}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %add.34 = f32[31,120]{1,0} add(f32[31,120]{1,0} %dot.29, f32[31,120]{1,0} %broadcast.33), metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %constant.35 = f32[] constant(0), metadata={op_type="aten__relu" op_name="aten__relu" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1471}
  %broadcast.36 = f32[31,120]{1,0} broadcast(f32[] %constant.35), dimensions={}, metadata={op_type="aten__relu" op_name="aten__relu" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1471}
  %maximum.37 = f32[31,120]{1,0} maximum(f32[31,120]{1,0} %add.34, f32[31,120]{1,0} %broadcast.36), metadata={op_type="aten__relu" op_name="aten__relu" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1471}
  %constant.165 = f32[] constant(0), metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %broadcast.168 = f32[31,120]{1,0} broadcast(f32[] %constant.165), dimensions={}, metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %compare.169 = pred[31,120]{1,0} compare(f32[31,120]{1,0} %maximum.37, f32[31,120]{1,0} %broadcast.168), direction=GT, metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %custom-call.35 = f32[84,120]{1,0} custom-call(f32[84,120]{1,0} %p4.38), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %transpose.56 = f32[120,84]{0,1} transpose(f32[84,120]{1,0} %custom-call.35), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %dot.57 = f32[31,84]{1,0} dot(f32[31,120]{1,0} %maximum.37, f32[120,84]{0,1} %transpose.56), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %custom-call.36 = f32[84]{0} custom-call(f32[84]{0} %p5.48), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.61 = f32[31,84]{1,0} broadcast(f32[84]{0} %custom-call.36), dimensions={1}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %add.62 = f32[31,84]{1,0} add(f32[31,84]{1,0} %dot.57, f32[31,84]{1,0} %broadcast.61), metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %constant.63 = f32[] constant(0), metadata={op_type="aten__relu" op_name="aten__relu" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1471}
  %broadcast.64 = f32[31,84]{1,0} broadcast(f32[] %constant.63), dimensions={}, metadata={op_type="aten__relu" op_name="aten__relu" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1471}
  %maximum.65 = f32[31,84]{1,0} maximum(f32[31,84]{1,0} %add.62, f32[31,84]{1,0} %broadcast.64), metadata={op_type="aten__relu" op_name="aten__relu" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1471}
  %constant.158 = f32[] constant(0), metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %broadcast.161 = f32[31,84]{1,0} broadcast(f32[] %constant.158), dimensions={}, metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %compare.162 = pred[31,84]{1,0} compare(f32[31,84]{1,0} %maximum.65, f32[31,84]{1,0} %broadcast.161), direction=GT, metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %p8.109 = s64[31]{0} parameter(8), frontend_attributes={neff_input_names="input8"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="train.py" source_line=70}
  %broadcast.115 = s64[31,10]{1,0} broadcast(s64[31]{0} %p8.109), dimensions={0}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %iota.3 = s64[31,10]{1,0} iota(), iota_dimension=1, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %compare.118 = pred[31,10]{1,0} compare(s64[31,10]{1,0} %broadcast.115, s64[31,10]{1,0} %iota.3), direction=EQ, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.113 = f32[] constant(1), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.120 = f32[31,10]{1,0} broadcast(f32[] %constant.113), dimensions={}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.112 = f32[] constant(0), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.119 = f32[31,10]{1,0} broadcast(f32[] %constant.112), dimensions={}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %select.121 = f32[31,10]{1,0} select(pred[31,10]{1,0} %compare.118, f32[31,10]{1,0} %broadcast.120, f32[31,10]{1,0} %broadcast.119), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %negate.122 = f32[31,10]{1,0} negate(f32[31,10]{1,0} %select.121), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.125 = s64[] constant(-100), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.126 = s64[31]{0} broadcast(s64[] %constant.125), dimensions={}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %compare.127 = pred[31]{0} compare(s64[31]{0} %p8.109, s64[31]{0} %broadcast.126), direction=NE, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.128 = f32[] constant(1), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.7 = f32[31]{0} broadcast(f32[] %constant.128), dimensions={}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.130 = f32[] constant(0), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.9 = f32[31]{0} broadcast(f32[] %constant.130), dimensions={}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %select.1 = f32[31]{0} select(pred[31]{0} %compare.127, f32[31]{0} %broadcast.7, f32[31]{0} %broadcast.9), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.11 = f32[31,10]{1,0} broadcast(f32[31]{0} %select.1), dimensions={0}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %multiply.134 = f32[31,10]{1,0} multiply(f32[31,10]{1,0} %broadcast.11, f32[31,10]{1,0} %select.121), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %multiply.144 = f32[31,10]{1,0} multiply(f32[31,10]{1,0} %negate.122, f32[31,10]{1,0} %multiply.134), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.135 = f32[] constant(0), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %reduce.140 = f32[] reduce(f32[31,10]{1,0} %multiply.134, f32[] %constant.135), dimensions={0,1}, to_apply=%AddComputation.136, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %compare.142 = pred[] compare(f32[] %reduce.140, f32[] %constant.135), direction=NE, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.141 = f32[] constant(1), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %select.143 = f32[] select(pred[] %compare.142, f32[] %reduce.140, f32[] %constant.141), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.145 = f32[31,10]{1,0} broadcast(f32[] %select.143), dimensions={}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %divide.146 = f32[31,10]{1,0} divide(f32[31,10]{1,0} %multiply.144, f32[31,10]{1,0} %broadcast.145), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %custom-call.37 = f32[10,84]{1,0} custom-call(f32[10,84]{1,0} %p6.66), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %transpose.84 = f32[84,10]{0,1} transpose(f32[10,84]{1,0} %custom-call.37), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %dot.85 = f32[31,10]{1,0} dot(f32[31,84]{1,0} %maximum.65, f32[84,10]{0,1} %transpose.84), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %custom-call.38 = f32[10]{0} custom-call(f32[10]{0} %p7.76), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.89 = f32[31,10]{1,0} broadcast(f32[10]{0} %custom-call.38), dimensions={1}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %add.90 = f32[31,10]{1,0} add(f32[31,10]{1,0} %dot.85, f32[31,10]{1,0} %broadcast.89), metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %constant.91 = f32[] constant(-inf), metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %reduce.96 = f32[31]{0} reduce(f32[31,10]{1,0} %add.90, f32[] %constant.91), dimensions={1}, to_apply=%MaxComputation.92, metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %broadcast.97 = f32[31,10]{1,0} broadcast(f32[31]{0} %reduce.96), dimensions={0}, metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %subtract.98 = f32[31,10]{1,0} subtract(f32[31,10]{1,0} %add.90, f32[31,10]{1,0} %broadcast.97), metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %exponential.99 = f32[31,10]{1,0} exponential(f32[31,10]{1,0} %subtract.98), metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %constant.100 = f32[] constant(0), metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %reduce.105 = f32[31]{0} reduce(f32[31,10]{1,0} %exponential.99, f32[] %constant.100), dimensions={1}, to_apply=%AddComputation.101, metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %log.106 = f32[31]{0} log(f32[31]{0} %reduce.105), metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %broadcast.107 = f32[31,10]{1,0} broadcast(f32[31]{0} %log.106), dimensions={0}, metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %subtract.108 = f32[31,10]{1,0} subtract(f32[31,10]{1,0} %subtract.98, f32[31,10]{1,0} %broadcast.107), metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %exponential.153 = f32[31,10]{1,0} exponential(f32[31,10]{1,0} %subtract.108), metadata={op_type="aten___log_softmax_backward_data" op_name="aten___log_softmax_backward_data"}
  %constant.147 = f32[] constant(0), metadata={op_type="aten___log_softmax_backward_data" op_name="aten___log_softmax_backward_data"}
  %reduce.152 = f32[31]{0} reduce(f32[31,10]{1,0} %divide.146, f32[] %constant.147), dimensions={1}, to_apply=%AddComputation.148, metadata={op_type="aten___log_softmax_backward_data" op_name="aten___log_softmax_backward_data"}
  %broadcast.154 = f32[31,10]{1,0} broadcast(f32[31]{0} %reduce.152), dimensions={0}, metadata={op_type="aten___log_softmax_backward_data" op_name="aten___log_softmax_backward_data"}
  %multiply.155 = f32[31,10]{1,0} multiply(f32[31,10]{1,0} %exponential.153, f32[31,10]{1,0} %broadcast.154), metadata={op_type="aten___log_softmax_backward_data" op_name="aten___log_softmax_backward_data"}
  %subtract.156 = f32[31,10]{1,0} subtract(f32[31,10]{1,0} %divide.146, f32[31,10]{1,0} %multiply.155), metadata={op_type="aten___log_softmax_backward_data" op_name="aten___log_softmax_backward_data"}
  %dot.157 = f32[31,84]{1,0} dot(f32[31,10]{1,0} %subtract.156, f32[10,84]{1,0} %custom-call.37), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %constant.159 = f32[] constant(0), metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %broadcast.160 = f32[31,84]{1,0} broadcast(f32[] %constant.159), dimensions={}, metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %select.163 = f32[31,84]{1,0} select(pred[31,84]{1,0} %compare.162, f32[31,84]{1,0} %dot.157, f32[31,84]{1,0} %broadcast.160), metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %dot.164 = f32[31,120]{1,0} dot(f32[31,84]{1,0} %select.163, f32[84,120]{1,0} %custom-call.35), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %constant.166 = f32[] constant(0), metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %broadcast.167 = f32[31,120]{1,0} broadcast(f32[] %constant.166), dimensions={}, metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %select.170 = f32[31,120]{1,0} select(pred[31,120]{1,0} %compare.169, f32[31,120]{1,0} %dot.164, f32[31,120]{1,0} %broadcast.167), metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %transpose.171 = f32[784,31]{0,1} transpose(f32[31,784]{1,0} %p3.28), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %dot.1 = f32[120,784]{0,1} dot(f32[31,120]{1,0} %select.170, f32[784,31]{0,1} %transpose.171), lhs_contracting_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %custom-call.39 = f32[120,784]{1,0} custom-call(f32[120,784]{0,1} %dot.1), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %add.346 = f32[120,784]{1,0} add(f32[120,784]{1,0} %custom-call.32, f32[120,784]{1,0} %custom-call.39), metadata={op_type="aten__add" op_name="aten__add"}
  %p0.1 = f32[] parameter(0), frontend_attributes={neff_input_names="input0"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %broadcast.5 = f32[120,784]{1,0} broadcast(f32[] %p0.1), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %multiply.347 = f32[120,784]{1,0} multiply(f32[120,784]{1,0} %add.346, f32[120,784]{1,0} %broadcast.5), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %add.348 = f32[120,784]{1,0} add(f32[120,784]{1,0} %p2.19, f32[120,784]{1,0} %multiply.347), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %constant.375 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.381 = f32[120]{0} reduce(f32[31,120]{1,0} %select.335, f32[] %constant.375), dimensions={0}, to_apply=%AddComputation.377, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.40 = f32[120]{0} custom-call(f32[120]{0} %reduce.381), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.358 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.364 = f32[120]{0} reduce(f32[31,120]{1,0} %select.170, f32[] %constant.358), dimensions={0}, to_apply=%AddComputation.360, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.42 = f32[120]{0} custom-call(f32[120]{0} %reduce.364), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %add.391 = f32[120]{0} add(f32[120]{0} %custom-call.40, f32[120]{0} %custom-call.42), metadata={op_type="aten__add" op_name="aten__add"}
  %broadcast.352 = f32[120]{0} broadcast(f32[] %p0.1), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %multiply.392 = f32[120]{0} multiply(f32[120]{0} %add.391, f32[120]{0} %broadcast.352), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %add.393 = f32[120]{0} add(f32[120]{0} %p1.11, f32[120]{0} %multiply.392), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %transpose.414 = f32[120,31]{0,1} transpose(f32[31,120]{1,0} %maximum.206), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %dot.2 = f32[84,120]{0,1} dot(f32[31,84]{1,0} %select.328, f32[120,31]{0,1} %transpose.414), lhs_contracting_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %custom-call.43 = f32[84,120]{1,0} custom-call(f32[84,120]{0,1} %dot.2), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %transpose.403 = f32[120,31]{0,1} transpose(f32[31,120]{1,0} %maximum.37), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %dot.3 = f32[84,120]{0,1} dot(f32[31,84]{1,0} %select.163, f32[120,31]{0,1} %transpose.403), lhs_contracting_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %custom-call.44 = f32[84,120]{1,0} custom-call(f32[84,120]{0,1} %dot.3), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %add.424 = f32[84,120]{1,0} add(f32[84,120]{1,0} %custom-call.43, f32[84,120]{1,0} %custom-call.44), metadata={op_type="aten__add" op_name="aten__add"}
  %broadcast.397 = f32[84,120]{1,0} broadcast(f32[] %p0.1), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %multiply.425 = f32[84,120]{1,0} multiply(f32[84,120]{1,0} %add.424, f32[84,120]{1,0} %broadcast.397), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %add.426 = f32[84,120]{1,0} add(f32[84,120]{1,0} %p4.38, f32[84,120]{1,0} %multiply.425), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %constant.453 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.459 = f32[84]{0} reduce(f32[31,84]{1,0} %select.328, f32[] %constant.453), dimensions={0}, to_apply=%AddComputation.455, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.45 = f32[84]{0} custom-call(f32[84]{0} %reduce.459), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.436 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.442 = f32[84]{0} reduce(f32[31,84]{1,0} %select.163, f32[] %constant.436), dimensions={0}, to_apply=%AddComputation.438, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.46 = f32[84]{0} custom-call(f32[84]{0} %reduce.442), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %add.469 = f32[84]{0} add(f32[84]{0} %custom-call.45, f32[84]{0} %custom-call.46), metadata={op_type="aten__add" op_name="aten__add"}
  %broadcast.430 = f32[84]{0} broadcast(f32[] %p0.1), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %multiply.470 = f32[84]{0} multiply(f32[84]{0} %add.469, f32[84]{0} %broadcast.430), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %add.471 = f32[84]{0} add(f32[84]{0} %p5.48, f32[84]{0} %multiply.470), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %transpose.492 = f32[84,31]{0,1} transpose(f32[31,84]{1,0} %maximum.232), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %dot.4 = f32[10,84]{0,1} dot(f32[31,10]{1,0} %subtract.321, f32[84,31]{0,1} %transpose.492), lhs_contracting_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %custom-call.47 = f32[10,84]{1,0} custom-call(f32[10,84]{0,1} %dot.4), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %transpose.481 = f32[84,31]{0,1} transpose(f32[31,84]{1,0} %maximum.65), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %dot.5 = f32[10,84]{0,1} dot(f32[31,10]{1,0} %subtract.156, f32[84,31]{0,1} %transpose.481), lhs_contracting_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %custom-call.48 = f32[10,84]{1,0} custom-call(f32[10,84]{0,1} %dot.5), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %add.502 = f32[10,84]{1,0} add(f32[10,84]{1,0} %custom-call.47, f32[10,84]{1,0} %custom-call.48), metadata={op_type="aten__add" op_name="aten__add"}
  %broadcast.475 = f32[10,84]{1,0} broadcast(f32[] %p0.1), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %multiply.503 = f32[10,84]{1,0} multiply(f32[10,84]{1,0} %add.502, f32[10,84]{1,0} %broadcast.475), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %add.504 = f32[10,84]{1,0} add(f32[10,84]{1,0} %p6.66, f32[10,84]{1,0} %multiply.503), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %constant.531 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.537 = f32[10]{0} reduce(f32[31,10]{1,0} %subtract.321, f32[] %constant.531), dimensions={0}, to_apply=%AddComputation.533, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.49 = f32[10]{0} custom-call(f32[10]{0} %reduce.537), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.514 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.520 = f32[10]{0} reduce(f32[31,10]{1,0} %subtract.156, f32[] %constant.514), dimensions={0}, to_apply=%AddComputation.516, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.50 = f32[10]{0} custom-call(f32[10]{0} %reduce.520), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %add.547 = f32[10]{0} add(f32[10]{0} %custom-call.49, f32[10]{0} %custom-call.50), metadata={op_type="aten__add" op_name="aten__add"}
  %broadcast.508 = f32[10]{0} broadcast(f32[] %p0.1), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %multiply.548 = f32[10]{0} multiply(f32[10]{0} %add.547, f32[10]{0} %broadcast.508), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %add.549 = f32[10]{0} add(f32[10]{0} %p7.76, f32[10]{0} %multiply.548), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %broadcast.553 = s64[31,10]{1,0} broadcast(s64[31]{0} %p8.109), dimensions={0}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %iota.5 = s64[31,10]{1,0} iota(), iota_dimension=1, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %compare.556 = pred[31,10]{1,0} compare(s64[31,10]{1,0} %broadcast.553, s64[31,10]{1,0} %iota.5), direction=EQ, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %constant.551 = f32[] constant(1), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.558 = f32[31,10]{1,0} broadcast(f32[] %constant.551), dimensions={}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %constant.550 = f32[] constant(0), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.557 = f32[31,10]{1,0} broadcast(f32[] %constant.550), dimensions={}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %select.559 = f32[31,10]{1,0} select(pred[31,10]{1,0} %compare.556, f32[31,10]{1,0} %broadcast.558, f32[31,10]{1,0} %broadcast.557), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.562 = f32[31,10]{1,0} broadcast(f32[] %constant.551), dimensions={}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %compare.563 = pred[31,10]{1,0} compare(f32[31,10]{1,0} %select.559, f32[31,10]{1,0} %broadcast.562), direction=NE, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.564 = f32[31,10]{1,0} broadcast(f32[] %constant.550), dimensions={}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %negate.560 = f32[31,10]{1,0} negate(f32[31,10]{1,0} %select.559), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %multiply.561 = f32[31,10]{1,0} multiply(f32[31,10]{1,0} %negate.560, f32[31,10]{1,0} %subtract.108), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %select.565 = f32[31,10]{1,0} select(pred[31,10]{1,0} %compare.563, f32[31,10]{1,0} %broadcast.564, f32[31,10]{1,0} %multiply.561), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %constant.566 = s64[] constant(-100), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.567 = s64[31]{0} broadcast(s64[] %constant.566), dimensions={}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %compare.568 = pred[31]{0} compare(s64[31]{0} %p8.109, s64[31]{0} %broadcast.567), direction=NE, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %constant.569 = f32[] constant(1), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.12 = f32[31]{0} broadcast(f32[] %constant.569), dimensions={}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %constant.571 = f32[] constant(0), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.13 = f32[31]{0} broadcast(f32[] %constant.571), dimensions={}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %select.2 = f32[31]{0} select(pred[31]{0} %compare.568, f32[31]{0} %broadcast.12, f32[31]{0} %broadcast.13), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.14 = f32[31,10]{1,0} broadcast(f32[31]{0} %select.2), dimensions={0}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %multiply.575 = f32[31,10]{1,0} multiply(f32[31,10]{1,0} %broadcast.14, f32[31,10]{1,0} %select.559), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %multiply.582 = f32[31,10]{1,0} multiply(f32[31,10]{1,0} %select.565, f32[31,10]{1,0} %multiply.575), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %reduce.587 = f32[] reduce(f32[31,10]{1,0} %multiply.582, f32[] %constant.550), dimensions={0,1}, to_apply=%AddComputation.583, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %constant.576 = f32[] constant(0), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %reduce.581 = f32[] reduce(f32[31,10]{1,0} %multiply.575, f32[] %constant.576), dimensions={0,1}, to_apply=%AddComputation.577, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %divide.588 = f32[] divide(f32[] %reduce.587, f32[] %reduce.581), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  ROOT %tuple.589 = (f32[120,784]{1,0}, f32[120]{0}, f32[84,120]{1,0}, f32[84]{0}, f32[10,84]{1,0}, /*index=5*/f32[10]{0}, f32[31,784]{1,0}, s64[31]{0}, f32[31,10]{1,0}, f32[]) tuple(f32[120,784]{1,0} %add.348, f32[120]{0} %add.393, f32[84,120]{1,0} %add.426, f32[84]{0} %add.471, f32[10,84]{1,0} %add.504, /*index=5*/f32[10]{0} %add.549, f32[31,784]{1,0} %p3.28, s64[31]{0} %p8.109, f32[31,10]{1,0} %subtract.108, f32[] %divide.588), frontend_attributes={neff_output_names="output0,output1,output2,output3,output4,output5,output6,output7,output8,output9"}
}

`

export default text;